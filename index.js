const express = require('express');
const app = express();
const dotenv = require('dotenv')
dotenv.config()

const cors = require('cors');
const router = require('./router')
const port = process.env.PORT;

const corsOptions = {
    origin: '*',
    methods : 'GET,POST,DELETE,PUT,OPTIONS',
    preflightContinue: false,
    optionsSuccesStatus: 204
}

app.use(express.json());
app.use(cors(corsOptions));
app.use(router)

app.listen(port, console.log(`servidor levantado en puerto ${port}`))