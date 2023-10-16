const { Sequelize, Datatypes } = require('sequelize') 
const config = require('./config/config.json');
const dotenv = require('dotenv');
dotenv.config();
console.log(process.env.DB_PASSWORD,process.env.DB_USERNAME,process.env.DB_PASSWORD,process.env.DB_HOST,process.env.DB_PORT)

const sequelize = new Sequelize(
    process.env.DB_DATABASE ,
    process.env.DB_USERNAME ,
    process.env.DB_PASSWORD ,
    {
        host:  process.env.DB_HOST ,
        port:  process.env.DB_PORT ,
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