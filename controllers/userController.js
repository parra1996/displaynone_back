const {User} = require("../models/index");
const UserController = {}
const bcrypt = require('bcrypt');
const authConfig = require('../config/auth');
const jwt = require('jsonwebtoken')

UserController.getAll = (req,res) => {
    User.findAll()
    .then(data => {
        res.send(data)
    })
}

UserController.login = (req,res) => {
    const { username, password} = req.body;
    try {
        User.findOne({
            where : {
                username : username
            }
        })
        .then(userFound =>{
            if(!userFound){
                res.status(404).send('A user was not found')
            }else {
                
            if (bcrypt.compareSync(password, userFound.password)) { 

                const token = jwt.sign({ user: userFound }, authConfig.secret, {
                    expiresIn: authConfig.expires
                });

                const {username, role, id} = userFound;

                res.json({
                    user: {username, role, id},
                    token: token
                })
            } else {
                res.status(404).send("A user was not found");
            }
            }
        })
    }catch(error){
        res.send(error)
    }
}

UserController.register = (req,res) => {
    const {
        username,
        password,
        role
    } = req.body;
    const hashPassword = bcrypt.hashSync(password,12)
   try {
    User.findOne({
        where: {
           username: username
        }
    })
    .then(userFound => {
        if(!userFound){
            User.create({
            username,
            password : hashPassword,
            role
        })
        .then(data => {
            res.send(data)
        })
    }
        else {
            res.send('This username already exists')
        }
    })
   }catch(err){
    res.send(err)
   }
}

UserController.updateUser = async (req,res) => {
    try{
    const userID = req.params.id;
    const newRol = req.body.role;
        User.findOne({
            where: {
                id: userID
            }
        })
        .then(async userFound => {
            if(!userFound){
                res.status(400).send('No user was found with this id');
                return
            }
           const newUserData = await userFound.update({role : newRol})
            res.send(newUserData)
        })
    }catch(err){
        res.send(err)
    }
}

UserController.deleteUser = (req,res) => {
    const userID = req.params.id
    try {
        User.findOne({
            where: {
                id : userID
            }
        })
        .then(userFound =>{
            if(userFound){
                userFound.destroy();
                res.send(`User ${userFound.username} has been removed`)
            }
            else{
                res.status(400).send( 'There was no user with this id')
            }
        })
    }catch(err){
        res.send({'error' : err})
    }
}

module.exports = UserController;