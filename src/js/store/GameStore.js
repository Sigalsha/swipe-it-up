import { observable, action } from "mobx";

class GameStore {
    @observable gameStatus = 'pending';
    @observable games = [];
    @observable users = [{ id: 1, name: 'user-1' }, { id: 2, name: 'user-2' }, { id: 3, name: 'user-3' }];
    target = { x: "", y: '' } //should get the target (x,y)
    playerIcon = { x: "", y: ""} //should get the player's icon (x,y)
    shot = { userName: "", startPoint: false, x: "", y: "" } 
    //shot => include username, startpoint(if player touched close to the startIcon),
    //and the shot (x,y)

    distanceTemp = {} //only distance from one shot to the target
    allDistances = [] //all the distances between the shots and the targets 
    score = 0

    @action addUser(id, name) {
        this.users.push({ id, name });
    }

    @action async addTargerPos(x, y) {
        let targetObj =  await {x: x, y: y}
        console.log(targetObj)
        this.target.x = targetObj.x;
        this.target.y = targetObj.y;
    } //get the targetDiv's (x,y) from TargetTransperent component

    @action async addPlayerIconPos(x,y) {
        let iconObj = await {x: x, y: y}
        console.log(iconObj)
        this.playerIcon.x = iconObj.x
        this.playerIcon.y = iconObj.y
    }

    @action async checkStartPoint(x, y) {
        let startObj = await {x: x, y: y}
        console.log(startObj)
      if ( (startObj.x <= this.playerIcon.x + 50) && (startObj.y <= this.playerIcon.y + 50) ) {
          this.shot.startPoint = true;
      } 
      return;
    } //check if player touched close to the startIcon or not (icon size = 50px)


    @action async addShot(x, y) {
        let shotObj = await {x: x, y: y}
        this.shot.x = shotObj.x;
        this.shot.y = shotObj.y;
        //send the shot through socket.io
    } //get the shot's (x,y) from Dart component

    getDistance() {
        let target = { ...this.target }
        let shot = { ...this.shot }
        let xSum = Math.pow((target.x - shot.x), 2);
        let ySum = Math.pow((target.y - shot.y), 2);
        let distance = Math.sqrt(xSum + ySum)
        this.distanceTemp = distance
        this.allDistances.push(this.distanceTemp) 
    } 

    getSum (total, num) {
        return total + num;
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