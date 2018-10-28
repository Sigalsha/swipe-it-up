import { observable, autorun, computed, action} from "mobx";
import { gameProperties, updateGameStatus } from '../api';
import openSocket from 'socket.io-client';

class GameStore {
    @observable userName = 'gogo'
    @observable gameState = 'pending';
    @observable games = [];
    @observable users = [];
    @observable msg = '';
    @observable target = {} //should get the target (x,y)
    @observable shot = {userName:this.userName, startPoint: false, x: 150, y: 150, distance:0 } 
    @observable shots = [] //array of all shots  
    @observable playerIcon = {};//should get the player's icon (x,y)
    //@observable allDistances = []; //all the distances between the shots and the targets 
    
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
        this.socket.on('user shot', (shot)=>{
            this.shots.push(shot);
        }); // from server
    }
    
    @action addTargerPos = (x1, y1) => {
        this.target['x'] = x1;
        this.target['y'] = y1;
    } //get the targetDiv's (x,y) from TargetTransperent component
    
    @action addPlayerIconPos = (x1, y1) => {
        this.playerIcon['x'] = x1;
        this.playerIcon['y'] = y1;
        // console.log('addPlayerIconPos'+'x:'+ this.playerIcon.x+ 'y:'+ this.playerIcon.y);
    }
    
    //check if player touched close to the startIcon or not (icon size = 50px)
    @action checkStartPoint = (x, y) => {
<<<<<<< HEAD
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
        //send to socket.io
        this.addDistance();
        //send to socket.io
=======
        if ( (x <= this.playerIcon.x + 70) && (y <= this.playerIcon.y + 70) ) {
            this.shot.startPoint = true;
            return;
        } 
        this.shot.startPoint = false;
        return;
    }
    
    @action managePlay = (x,y) => {
        this.addShot(x,y);
        this.addDistance();
        this.socket.emit('user shot', this.shot); //to server
    }
    
    @action addShot = (x1, y1) => {
        this.shot = {...this.shot,x:x1,y:y1};
        console.log('add shot:'+'x:'+this.shot['x']+'y:'+this.shot['y']);
>>>>>>> f79f1de27b6ab521e86c5d6e81086eb714baf921
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
<<<<<<< HEAD
        let distance = Math.sqrt(xSum + ySum)
        this.distanceTemp = distance
=======
        let distanceCalc = Math.sqrt(xSum + ySum);
        this.shot = {...this.shot,distance:distanceCalc}
        //this.allDistances.push(distance) 
>>>>>>> f79f1de27b6ab521e86c5d6e81086eb714baf921
    } 
    
    getSum (total, num) {
        return total + num;
    }
<<<<<<< HEAD

    calculateScore () {
        let startPoint = {...this.shot.startPoint}
        let distance = this.distanceTemp

        let score = this.score
        if (!startPoint){
            score 
        }
    }

=======
    
>>>>>>> f79f1de27b6ab521e86c5d6e81086eb714baf921
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

    calculateScore () {
        let distance = {...this.distanceTemp};
        let shot = {...this.shot}
        let score = this.score
        if (!shot.startPoint) {


        }
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
}

const store = new GameStore();
export default store;