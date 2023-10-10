const express = require('express');
const app = express();
const dotenv = require('dotenv')
dotenv.config()

const cors = require('cors');
const router = require('./router')

const db = require('./db.js')
const port = process.env.PORT;

const corsOptions = {
    origin:"*",
    methods : "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccesStatus: 204
}

app.use(express.json());
app.use(cors(corsOptions));
app.use(router)

db.then(()=> {
    app.listen(port, ()=> console.log(`Server connected on port: ${port}`))
})
.catch((error)=> {
    console.log(`error:  ${error}`)
})