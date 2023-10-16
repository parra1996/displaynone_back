const { Op } = require('sequelize');
const {Order} = require('../models/index');
const {Company} = require('../models/index');

const orderController = {};

orderController.getAll = (req,res) => {
     Order.findAll()
    .then(data => {
        res.send(data)
    })
};

orderController.createOrder = async (req,res) => {
    const {
        direction,
        zip,
        name,
        addressee,
        weight,
        clientName,
        price,
        order_type
    } = req.body;
    
    try{
        const zipToFound = zip.slice(0,2);
        Company.findOne({
            where: {
                zip: {
                    [Op.like]: `${zipToFound}%`
                }
            }
        })
        .then(companyFound => {
                Order.create({
                companyName : companyFound ? companyFound.name : 'Invent' ,
                direction,
                zip,
                name,
                addressee,
                weight,
                clientName,
                price,
                order_type
                })
                .then(newOrder => {
                if(newOrder){
                    res.json({
                        message:`A new order made by : ${clientName} to: ${addressee} has been placed`
                    });
                }
                else{
                    res.status(400).send('Error, please check yor order and try again')
                }
                })
            
        })
        .catch(err=>{
            res.status(409).send(err.message)
        })
      
       
    }catch(err){
        res.status(400).send({
            'error': err.message
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
                res.json({message:`the order with destiny to ${orderFound.addressee} has been removed`})
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