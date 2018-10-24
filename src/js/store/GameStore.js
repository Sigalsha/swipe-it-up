import { observable } from "mobx";

class GameStore {
    @observable gameStatus = 'pending';
    @observable games = [];
    @observable users = [{id:1,name:'user-1'},{id:2,name:'user-2'},{id:3,name:'user-3'}];
 
    addUser(id ,name) {
	this.users.push({ id, name });
    }
}

const store = new GameStore();
export default store;