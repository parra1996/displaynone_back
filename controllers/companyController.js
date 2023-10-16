const {Company} = require('../models/index');
const companyController = {};

companyController.getAll = (req,res) => {
     Company.findAll()
    .then(data => {
        res.send(data)
    })
} 

companyController.registerCompany = (req,res) => {
    const {
        name,
        zip,
    } = req.body;

    try {
        Company.findOne({
            where : {
                name: name
            }
        })
        .then(companyFound => {
            if(!companyFound){
                Company.create({
                    name,
                    zip,
                })
                .then(newCompany=> {
                    res.json({message:`a new company named ${newCompany.name} has been created`})
                })
            }else{
                res.status(409).json({message:'A company with this name already exists'})
            }
        })
    }catch(error){
        res.status(400).send(error);
    }
};

companyController.updateCompany = (req,res) => {
    const companyID = req.params.id;
    const {name, zip } = req.body;
    try{
        Company.findOne({
            where : {
                id : companyID
            }
        })
        .then( companyFound =>{
            companyFound.update({
                name: name,
                zip: zip,
            })
            res.json({message: companyFound})
        })
    }catch(error){
        res.status(409).send(error.message)
    }
}

companyController.deleteCompany = (req,res) => {
    const companyID = req.params.id
    try {
        Company.findOne({
            where: {
                id : companyID
            }
        })
        .then(companyFound =>{
            if(companyFound){
                companyFound.destroy();
                res.json({message: `Company ${companyFound.name} has been removed`})
            }
            else{
                res.status(422).json( {message: 'There was no company with this id'})
            }
        })
    }catch(err){
        res.json({'error' : err})
    }
}

module.exports = companyController;