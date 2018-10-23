const Sequelize = require ('sequelize');

class SingletonDB {
    constructor() {
        this.sequelize =  new Sequelize('postgres://idnswyfi:DjVQcHzVwCyiBjVOobGaAPHoaT8YrebE@horton.elephantsql.com:5432/idnswyfi');
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

