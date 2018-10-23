const dbModel = require('./dataAccess/DBModels');

const user1 = {
    userName: "bella",
    manager: false,
    score: 0
};
console.log(user1)

const timeNow = function() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let time = h + m
    console.log(time)
    return time;
}

const game = {start_time: timeNow()}
console.log(game);

const realUser = dbModel.createUser(user1)
console.log(realUser);

const realGame = dbModel.createGame(game)
console.log(realGame)

