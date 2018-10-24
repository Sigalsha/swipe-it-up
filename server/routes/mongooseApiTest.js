const express = require('express');
const router = express.Router();
const dbActions = require('../../dataAccess/dbActions')

// let user1 = new User({
//     userName: "didi",
//     manager: false
// });

// let game1 = new Game({
//     start_time: new Date(),
// });

// let score1 = new Score({
//     score: 10,
//     user: user1._id,
//     game: game1._id
// })

// score1.save((err, data)=> {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data + 'has been saved to db');
// })

// user1.scores.push(score1)
// game1.scores.push(score1)

// user1.save((err, data)=> {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data + 'has been saved to db');
// })

// game1.save((err, data)=> {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data + 'has been saved to db');
// })


// User.findOne({userName:"didi"}).populate('scores').exec(function(err, user){
//     console.log(user);
// }); 



//adding a new user in the DB, using the user name from the authentication
const addUser = async function (name, res) {
    try {
        const user = await dbActions.createUser(name);
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
    addUser(name, res);
})

//same function with authentication and different route:
// router.post('/login', passport.authenticate('local'), (req, res) => {
//     res.send(req.user.username);
//     }
// )


//tag an user as a manager in the DB, using the user name from the authentication
const tagUserAsManager = async function (name, res) {
    try {
        const manager = await dbActions.tagManager(name);
        console.log(manager)
        res.send(manager)
    }
    catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
}
//put the user name to become manager by calling the tagUserAsManager function
router.put('/manager', function (req, res) {
    let { name } = req.body;
    tagUserAsManager(name, res);
})


const addGame = async function (req, res) {
    try {
        const game = await dbActions.createGame();
        console.log(game)
        res.send(game)
    }
    catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
}
//get the game details (_id)
router.get('/game', function (req, res){
    addGame(req, res)
})


const addScore = async function (name, gameID, scoreData, res) {
    try {
        const score = await dbActions.createScore(name, gameID, scoreData);
        console.log(score)
        res.send(score)
    }
    catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
}

router.post('/score', function (req, res){
    let { name, gameID, scoreData } = req.body;
    addScore(name, gameID, scoreData, res);
})


const getScoresPerUser = async function (name, res){
    try {
        const userScores = await dbActions.getUserScores(name);
        console.log(userScores)
        res.send(userScores)
    }
    catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
}

router.get('/user/:name', function (req, res) {
    let { name } = req.params;
    getScoresPerUser(name, res);
})

module.exports = router;