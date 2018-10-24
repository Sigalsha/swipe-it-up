const express = require('express');
const dbModels = require('../dataAccess/DBModels');
const router = express.Router();


//adding a new user in the DB, using the user name from the authentication
const addUser = async function (res, name) {
    try {
        const user = await dbModels.createUser({ userName: name });
        console.log(user)
        res.send(user)
    }
    catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
}
//post the user name by calling the addUser function (should change to an authentication func below)
router.post('/user', function (req, res) {
    let { name } = req.body;
    addUser(res, name);
})

//same function with authentication and different route:
// router.post('/login', passport.authenticate('local'), (req, res) => {
//     res.send(req.user.username);
//     }
// )



//need to check and decide if sequalize will create the start time of the game,
// or the client side - get/post route? 
const addGame = async function (time, res) {
    try {
        const game = await dbModels.createGame({ start_time: time });
        console.log(game)
        res.send(game)
    }
    catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
}
//post the start time of the game
router.post('/game', function (req, res){
    let { time } = req.body;
    addGame(res, time)
})


//tag an user as a manager in the DB, using the user name from the authentication
const tagUserAsManager = async function (res, name) {
    try {
        const manager = await dbModels.tagManager({ userName: name });
        console.log(user)
        res.send(user)
    }
    catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
}
//put the user name to become manager by calling the tagUserAsManager function
router.put('/manager', function (req, res) {
    let { name } = req.body;
    tagUserAsManager(res, name);
})


//this function must be called after the game was created, in order to make the connection between the game and the users
const checkRelation = async function (res, userName, gameId) {
    try {
        const relation = await dbModels.addRelation({ userName: userName }, { id: gameId });
        console.log(relation)
        res.send("relation was established")
    }
    catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
}
//put the username and gameId to establish the relation
router.put('/check', function (req, res) {
    let {userName, gameId} = req.body;
    checkRelation(res, userName, gameId)
})



//get all users of a specific game
const getAllUsers = async function (res, gameId, userName) {
    try {
        const game = await dbModels.find({ userName: userName }, { id: gameId }, false);
        console.log(game)
        res.send(game)
    }
    catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
}
//get userName and gameId with req.query. 
//I should add a condition for the manager (so he won't be a part of the players)
router.get('/users', function (req, res) {
    let { userName, gameId } = req.query;
    getAllUsers(res, userName, gameId);
})



//add a score to an user:
const updateScoreToDB = async function (res, playerScore, searchObject ){
    try {
        const player = await dbModels.addScore(playerScore, searchObject);
        console.log(player)
        res.send(player)
    }
    catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
}
//put the score to the correct user - should fix/add params/query
router.put('/user/score', function (req, res){
    const {score, userName} = req.body;
    updateScoreToDB(res, score, userName)
})



module.exports = router;