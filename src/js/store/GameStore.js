import { observable } from "mobx";

class GameStore {
    @observable gameStatus = 'pending';
    @observable games = [];
    @observable users = [{ id: 1, name: 'user-1' }, { id: 2, name: 'user-2' }, { id: 3, name: 'user-3' }];
    @observable distanceTemp = {}
    @observable shot = {}


    addUser(id, name) {
        this.users.push({ id, name });
    }

    getDistance(targetX, targetY, playerX, playerY) {
        let xSum = (targetX - playerX) * (targetX - playerX);
        let ySum = (targetY - playerY) * (targetY - playerY)
        let distance = Math.sqrt(xSum + ySum)
        this.shot.push({playerX, playerY})
        this.distanceTemp = distance
    }
}

const store = new GameStore();
export default store;