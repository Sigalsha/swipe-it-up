import { observable, autorun, computed, action} from "mobx";
import { gameProperties, updateGameStatus } from '../api';
import openSocket from 'socket.io-client';

class GameStore {
    @observable gameState = 'pending';
    @observable games = [];
    @observable users = [];
    @observable msg = '';
    @observable target = {} //should get the target (x,y)
    @observable shot = { userName: "gogo", startPoint: false, x: 150,  y: 150 } 
    @observable playerIcon = {};//should get the player's icon (x,y)

    //shot => include username, startpoint(if player touched close to the startIcon),
    //and the shot (x,y)
    // @observable distanceTemp = 0 //only distance from one shot to the target
    @observable allDistances = [] //all the distances between the shots and the targets 

    socket = openSocket('http://localhost:5000');

    constructor() {
        this.socket.on('chat message', (d) => { //from server
            this.msg = d;
        }); 
        this.socket.on('update state', (d) => { //from server
            this.gameState = d;
        });
        this.socket.on('new user', (d) => { //from server
            this.users = d;
        }); 
    }

    @action addTargerPos = (x, y) => {
        this.target[x] = x;
        this.target[y] = y;
    } //get the targetDiv's (x,y) from TargetTransperent component

    @action addPlayerIconPos = (x,y)=>{
        this.playerIcon[x] = x;
        this.playerIcon[y] = y;
    }


    @action checkStartPoint = (x, y) => {
      if ( (x <= this.playerIcon[x] + 70) && (y <= this.playerIcon[y] + 70) ) {
          this.shot.startPoint = true;
          return;
      } 
      this.shot.startPoint = false;
      return;
    } //check if player touched close to the startIcon or not (icon size = 50px)

    @action addShot = (x, y) => {
        console.log('add shot');
        this.shot = {...this.shot,x:x,y:y};
        console.log('add shot:'+'x:'+this.shot[x]+'y:'+this.shot[y]);
        this.addDistance();
    } //get the shot's (x,y) from Dart component

    @computed get getShotX()  {
        return this.shot.x; 
    }

    @computed get getShotY() {
        return this.shot.y; 
    }

    @action addDistance() {
        let target = { ...this.target }
        let shot = { ...this.shot }
        let xSum = Math.pow((target.x - shot.x), 2);
        let ySum = Math.pow((target.y - shot.y), 2);
        let distance = Math.sqrt(xSum + ySum)
        // this.distanceTemp = distance
        this.allDistances.push(distance) 
    } 

    getSum (total, num) {
        return total + num;
    }

    getScore() {
        let score = this.allDistances.reduce(this.getSum)
        //should add logic that checks if the player miss the startIcon,
        //and reduce the score.
    }

    
    // if (this.shot.startPoint) { 
    // } else {
    //     console.log("player should have less points") 
    //     //should send some obj data through socket.io, 
    //     //so the player's score will be lower. 
    // }
        
    getGameProperty = () => {gameProperties('',
        (err, properties) => {
            this.users = properties.users;
            this.gameState = properties.gameState;
        });
    }

    changeGameState = (state) => {updateGameStatus(state,
        (err, properties) => {
            this.gameState = properties.gameState;
        });
    }
    
    addUser(user) {
        this.socket.emit('new user', user); //to server
    }

    chatMessage(msg) {
        this.socket.emit('chat message', msg); //to server
    }

    updateGameStatus(status, cb) {
        this.socket.emit('update state', status); //to server
    }
}

const store = new GameStore();
export default store;