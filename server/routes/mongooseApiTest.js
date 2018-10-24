const express = require('express');
const router = express.Router();
const { User, Game, Score } = require('../../dataAccess/models');

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


User.findOne({userName:"didi"}).populate('scores').exec(function(err, user){
    console.log(user);
}); 

module.exports = router;