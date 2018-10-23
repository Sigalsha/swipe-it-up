const express = require('express');
// const dbModels = require('../dataAccess/DBModels');
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
    let {name} = req.body;
    addUser(res, name);
})

//same function with authentication and different route:
// router.post('/login', passport.authenticate('local'), (req, res) => {
//     res.send(req.user.username);
//     }
// )



//need to check and decide if sequalize will create the time or the client side - get/post route? 
// const addGame = async function ( time , res ) {
//     try {
//         const game = await dbModels.createGame({ start_time: time});
//         console.log(game)
//         res.send(game)
//     }
//     catch (err) {
//         console.error(err);
//         res.status(500).send(err);
//     }
// }

// router.post('/game', async (req, res) => {
//     let {time} = req.body;
//     addGame(res, time);
// })


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
router.put('/manager', function (req, res){
    let {name} = req.body;
    tagUserAsManager(res, name);
})

//get all users of a specific game
const getAllUsers = async function ( res , gameId, userName) {
    try {
        const game = await dbModels.find({userName: userName}, {id: gameId}, false);
        console.log(game)
        res.send(game)
    }
    catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
}

//get userName and gameId with req.query
router.get('/:gameId/:', function ( req, res ){
    let {userName, gameId} = req.query;
    getAllUsers(res, userName, gameId);
})



module.exports = router;