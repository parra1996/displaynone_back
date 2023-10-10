const User = require("../models/user");

const UserController = {}

UserController.getAll = (req,res) => {
    res.send('hola ')
}

UserController.register = (req,res) => {
   try {
    
   }catch(err){
    res.send(err)
   }
}

module.exports = UserController;