const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let userSchema = new Schema({
    userName: String,
    manager: Boolean,
    scores: [{type: Schema.Types.ObjectId, ref: 'score'}] //will get all the user's score from the game
});
// , { usePushEach: true } - check if needed

let gameSchema = new Schema({
    start_time: Date,
    scores: [{type: Schema.Types.ObjectId, ref: 'score'}] //will get all the users scores from the specific game
});
// , { usePushEach: true } - check if needed

let scoreSchema = new Schema({
    score: Number, //will get a single score of a single player, from a single game
    user: {type: Schema.Types.ObjectId, ref: 'user'},
    game: {type: Schema.Types.ObjectId, ref: 'game'}
});
// , { usePushEach: true } - check if needed


let User = mongoose.model('user', userSchema)
let Game = mongoose.model('game', gameSchema)
let Score = mongoose.model('score', scoreSchema)

module.exports = {User, Game, Score};