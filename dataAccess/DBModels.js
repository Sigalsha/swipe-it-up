
// const Sequelize = require('sequelize')
// const singletonDB = require('./da');

// class DBModels {

//     constructor() {
//         this.User = singletonDB.define('user', {
//             userName: Sequelize.STRING,
//             // manager: Sequelize.Boolean, //default = false
//             score: Sequelize.FLOAT //default = 0

//         });

//         this.Game = singletonDB.define('game', {
//             start_time: Sequelize.DATE

//         });

//         this.User_Game = singletonDB.define('User_Game', {});

//         this.setConnections();
//         this.syncConnections();
//     }

//     setConnections() {

//         this.User.belongsToMany(this.Game, { through: this.User_Game });

//         this.Game.belongsToMany(this.User, { through: this.User_Game });

//     }

//     //should comment this function if it run once 
//     syncConnections() {
//         this.User.sync()
//         this.Game.sync()
//         this.User_Game.sync()
//     }

//     //a new user will get (manager: false) as defualt
//     async createUser(userData) {
//         const newUser = await this.User.create(userData);
//         return newUser;
//     }

//     //a new game will be get the time when its started
//     async createGame(gameData) {
//         const newGame = await this.Game.create(gameData);
//         return newGame;
//     }

//     //the user will be updated to have (manager: true) once pressed "create game"
//     //parameter will be the userName
//     async tagManager(searchObject) {
//         const manager = await this.User.update(
//             { manager: true },
//             { where: { searchObject } }
//         )
//         return manager;
//     }

    
//     async addRelation(userObject, gameObject) {
//         let user = await this.User.find(userObject);
//         let game = await this.Game.find(gameObject)
//         user.addGame(game);
//         console.log(game)
//         return true;
//     }

//     //update or add a player's score
//     async addScore(playerScore, searchObject) {
//         const player = await this.User.update(
//             {score: playerScore},
//             { where: { searchObject }}
//         )
//         return player;
//     }

//     //query- 1. all the game of the user
//     //query- 2. all the users in a game
//     find(userObject, gameObject, includeGame) {
//         const generalObj = {};
//         const include = [];
//         const model = {};

//         if (includeGame) {
//             model = this.User;
//             generalObj = userObject;
//             include.push(gameObject)
//         } else {
//             model = this.Game;
//             generalObj = gameObject;
//             include.push(userObject);
//         }

//         return model.find({
//             where: generalObj,
//             include: include
//         })
//     }
// }

// const dbModels = new DBModels();
// module.exports = dbModels; 