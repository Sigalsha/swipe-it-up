// const { User, Game, Score } = require('./models');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

class DBActions {
    constructor() {
        this.userSchema = new Schema({
            userName: String,
            manager: Boolean,
            scores: [{ type: Schema.Types.ObjectId, ref: 'score' }]
            //will get all the user's score from the game
        });
        // , { usePushEach: true } - check if needed

        this.gameSchema = new Schema({
            start_time: Date,
            scores: [{ type: Schema.Types.ObjectId, ref: 'score' }]
            //will get all the users scores from the specific game
        });
        // , { usePushEach: true } - check if needed

        this.scoreSchema = new Schema({
            score: Number, //will get a single score of a single player, from a single game
            user: { type: Schema.Types.ObjectId, ref: 'user' },
            game: { type: Schema.Types.ObjectId, ref: 'game' }
        });
        // , { usePushEach: true } - check if needed 

        this.setConnections()
    }

    setConnections() {
        this.User = mongoose.model('user', this.userSchema)
        this.Game = mongoose.model('game', this.gameSchema)
        this.Score = mongoose.model('score', this.scoreSchema)
    }

    //a new user will get name from client + (manager: false) as defualt
    //and will be saved in db
    async createUser(userData) {
        const newUser = await new this.User({ userName: userData, manager: false });
        newUser.save((err, data) => {
            if (err) {
                console.log(err);
            }
            console.log(data.userName + ' has been saved to db');
        })
        return newUser;
    }

    //tag an user as manager
    async tagManager(userData) {
        const manager = await this.User.findOneAndUpdate(
            { userName: userData }, { manager: true }, (err, user) => {
                if (err) {
                    console.log(err)
                }
                console.log(user.userName + ' has been saved to db')
            })
        return manager;
    }


    //a new game will be created and save to db
    async createGame() {
        const newGame = await new this.Game({ start_game: new Date() });
        newGame.save((err, data) => {
            if (err) {
                console.log(err);
            }
            console.log('game id: ' + data._id + ' has been saved to db');
        })
        return newGame;
    }

    //
    async createScore(userData, gameID, scoreData) {
        const user = await this.User.findOne(
            { userName: userData }, (err, user) => {
                if (err) {
                    console.log(err)
                }
                console.log(user.userName)
            });
        const game = await this.Game.findById(
            { _id: gameID }, (err, game) => {
                if (err) {
                    console.log(err)
                }
                console.log(game._id)
            }
        )
        const newScore = await new this.Score(
            { score: scoreData, user: user._id, game: game._id });
        newScore.save((err, data) => {
            if (err) {
                console.log(err);
            }
            console.log('score: ' + data.score + ' has been saved to db');
        })
        user.scores.push(newScore);
        game.scores.push(newScore);

        user.save((err, data) => {
            if (err) {
                console.log(err);
            }
            console.log(data.scores + ' has been updated to ' + data.userName);
        });
        game.save((err, data) => {
            if (err) {
                console.log(err);
            }
            console.log(data.scores + ' has been updated to ' + data._id);
        });
        return newScore;
    }

    async getUserScores(userData) {
        const userScores = this.User.findOne({userName: userData}).populate('scores').exec(function(err, user){
            if (err) {
                console.log(err);
            }
            console.log(user)
        });
        console.log(userScores)
        return userScores;
    }



}


const dbActions = new DBActions();
module.exports = dbActions;