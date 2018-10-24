const Sequelize = require ('sequelize');

class SingletonDB {
    constructor() {
        this.sequelize =  new Sequelize('mysql://siglasha:123456789@www.db4free.net/swipe_it_up');
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

