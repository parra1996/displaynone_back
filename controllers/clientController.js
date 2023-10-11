const Client = require("../models/index");

const clientController = {}

clientController.getAll = (req,res) => {
    Client.findAll()
    .then(data => {
        res.send(data)
    })
}

clientController.register = (req,res) => {
    const {
        firstName,
        lastName,
        email
    } = req.body;
   try {
    Client.findOne({
        where: {
           email: email
        }
    })
    .then(companyFound => {
        if(!companyFound){
            Client.create({
            firstName,
            lastName,
            email
        })
        .then(data => {
            res.send(data)
        })
    }
        else {
            res.status(400).send('This client already exists')
        }
    })
   }catch(err){
    res.send(err)
   }
}

module.exports = clientController; 