const { Sequelize, Datatypes } = require('sequelize') 
const config = require('./config/config.json');

const dotenv = require('dotenv');
dotenv.config();

const sequelize = new Sequelize(
    process.env.DATABASE || config.development.database,
    process.env.DB_USERNAME || config.development.username,
    process.env.PASSWORD || config.development.password,
    {
        host:  process.env.DB_PASSWORD || config.development.host,
        port:  process.env.DB_PORT || config.development.port,
        dialect: 'mysql',
        operatorsAliases: 0,
        pool : {
            max:5,
            min:0 ,
            acquire: 30000,
            idle: 10000
        }
    }
);

module.exports = sequelize.authenticate()
.then((db)=>{
    console.log('Database connected '); 
    return db;
}); 