const {Order} = require('../models/index');

const orderController = {};

orderController.getAll = (req,res) => {
     Order.findAll()
    .then(data => {
        res.send(data)
    })
};

orderController.createOrder = async (req,res) => {
    const {clientID, companyID, userID, addressee, weight, email} = req.body;
    try{
        Order.create({
            clientID: clientID,
            companyID: companyID,
            userID: userID,
            addressee: addressee,
            weight: weight,
            email: email
        })
        .then(newOrder => {
            if(newOrder){
                res.send(`A new order to: ${addressee} has been placed`);
            }
            else{
                res.status(400).send('Error, please check yor order and try again')
            }
        })
    }catch(err){
        res.status(400).send({
            'error': err
        })
    }
}

orderController.deleteOrder = (req,res) => {
    const orderID = req.params.id
    try {
        Order.findOne({
            where: {
                id : orderID
            }
        })
        .then(orderFound =>{
            if(orderFound){
                orderFound.destroy();
                res.send(`the order with destiny to ${orderFound.addressee} has been removed`)
            }
            else{
                res.status(400).send( 'There was no order with this id')
            }
        })
    }catch(err){
        res.send({'error' : err})
    }
}

module.exports = orderController;