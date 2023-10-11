const {User} = require("../models/index");
const UserController = {}
const bcrypt = require('bcrypt')

UserController.getAll = (req,res) => {
    User.findAll()
    .then(data => {
        res.send(data)
    })
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
    const userID = req.params.id;
    const newRol = req.body.role;
    try{
        User.findOne({
            where: {
                id: userID
            }
        })
        .then(async userFound => {
            console.log(userFound)
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