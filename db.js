import { Sequelize, Datatypes } from 'sequelize';
const config = require('./config/config.json');

const sequelize = new Sequelize(
    config.development.database,
    config.development.username,
    config.development.password,
    {
        host: config.development.host,
        port: config.development.port,
        dialect: 'mysql',
        operatorsAliases: false,
        pool : {
            max:5,
            min,
            acquire: 30000,
            idle: 10000
        }
    }
);

module.exports = sequelize.authenticate()
.then((db)=> {
    console.log(`Connected to Database`)
    return db;
})