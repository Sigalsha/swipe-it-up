import { observable, autorun, computed } from "mobx";
import { gameProperties, updateGameStatus } from '../api';
import openSocket from 'socket.io-client';

class GameStore {
    @observable gameState = '';
    @observable games = [];
    @observable users = [];
    @observable msg = '';
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

    @computed  get getGameState() {
		return this.gameState;
	}
        
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