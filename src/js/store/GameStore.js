import { observable, autorun, computed, action} from "mobx";
import { gameProperties, updateGameStatus } from '../api';
import openSocket from 'socket.io-client';

class GameStore {
    @observable userName = '';
    @observable gameState = 'pending';
    @observable games = [];
    @observable users = [];
    @observable msg = '';
    @observable target = {} //should get the target (x,y)
    @observable shot = {userName:this.userName, startPoint: false, x: 150, y: 150, distance:0, score:0 } 
    @observable shots = [] //array of all shots  
    @observable playerIcon = {};//should get the player's icon (x,y)
    @observable score = {};//should get the player's icon (x,y)
    
    socket = openSocket('http://localhost:5000');
    
    constructor() {
        this.socket.on('chat message', (d) => { //from server
            this.msg = d;
        }); 
        this.socket.on('update state', (state) => { //from server
            this.gameState = state;
        });
        this.socket.on('new user', (user) => { //from server
            this.users = user;
        });
        
        this.socket.on('remove shots', () => { //from server
            this.shots = [];
        }); 
        
        this.socket.on('user shot', (shot)=>{
            this.shots.push(shot);
            this.shots.sort((a, b)=>{return a.distance - b.distance});//sort before insert    
            this.addScore();
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
        this.shot = {...this.shot,x:x1,y:y1,userName:this.userName};
        console.log('add shot:'+'x:'+this.shot['x']+'y:'+this.shot['y']);
    } //get the shot's (x,y) from Dart component
    
    @computed get getShotX()  {
        return this.shot.x; 
    }
    
    @computed get getShotY() {
        return this.shot.y; 
    }
    
    @action clearShots() {
        this.socket.emit('remove shots'); //to server
    }
    
    @action addDistance() {
        let target = { ...this.target }
        let shot = { ...this.shot }
        let xSum = Math.pow((target.x - shot.x), 2);
        let ySum = Math.pow((target.y - shot.y), 2);
        let distanceCalc = Math.sqrt(xSum + ySum);
        this.shot = {...this.shot,distance:distanceCalc} 
    }
    
    @action addScore() {
        let unit = 100/this.shots.length;
        for(let i in this.shots) {
            if (!this.shots[i].startPoint){
                this.shots[i] = {...this.shots[i], score:0};
            }
            this.shots[i] = {...this.shots[i], score:(unit * (this.shots.length-i))};
        }
    }
    
    getGameProperty = () => {gameProperties('',
    (err, properties) => {
        this.users = properties.users;
        this.gameState = properties.gameState;
    });
}


addUser(user) {
    this.socket.emit('new user', user); //to server
}

chatMessage(msg) {
    this.socket.emit('chat message', msg); //to server
}

updateGameStatus(status) {
    this.socket.emit('update state', status); //to server
}
}

const store = new GameStore();
export default store;