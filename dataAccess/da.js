const Sequelize = require ('sequelize');

class SingletonDB {
    constructor() {
        this.sequelize =  new Sequelize('mysql://sigalsha:123456789@db4free.net:3306/swipe_it_up');
        this.start();
    }

    start(){
        this.sequelize.authenticate()
        .then(()=>{
            console.log('Connection established')
        })
        .catch(err=>{
            console.error('Unable to connect')
        });
    }
    
}

const singletonDB = new SingletonDB();

module.exports = singletonDB;

