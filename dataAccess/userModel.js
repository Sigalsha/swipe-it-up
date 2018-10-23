
const Sequelize = require('sequelize')
const singletonDB = require('../dataAccess/da');

class UserModel {

    constructor() {
        this.User = singletonDB.sequelize.define('user', {
            userName: Sequelize.STRING,
            manager: Sequelize.Boolean

        });

        this.Game = singletonDB.sequelize.define('game', {
            start_time: Sequalize.Date
        });

        this.User_Game = singletonDB.sequelize.define('User_Game', {});

        this.setConnections();
        this.syncConnections();
    }

    setConnections() {

        this.User.belongsToMany(this.Game, { through: this.User_Game });

        this.Game.belongsToMany(this.User, { through: this.User_Game });

    }

    //should comment this function if it run once 
    syncConnections() {
        User.sync()
        Game.sync()
        User_Game.sync()
    } 

    async createUser(userData, parentID) {
        const newUser = await this.User.create(userData);
        if (parentID) {
            await this.Parent.create({ UserId: newUser.id, parentId: parentID });
        }

        return newUser;
    }

    find(searchObject, includeChildren, includeParents) {

        const include = [];
        if (includeChildren) {
            include.push({
                model: this.User, as: "Children",
                include: [{ model: this.User, as: "Children" }]
            });
        }
        if (includeParents) {
            include.push({ model: this.User, as: "Parents" });
        }


        return this.User.find({
            where: searchObject,
            include: include
        });
    }
}

const userModel = new UserModel();
module.exports = userModel; 