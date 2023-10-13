const { ADMIN } = require('../consts');
const { User } = require('../models/index');

module.exports = (req,res, next) => {
    const id = req.body.id;
    User.findOne({
        where: {
            id: id
        }
    })
    .then(userFound => {
        if(userFound.role === ADMIN){
            next();
        }else{
            res.send('This user is not admin')
        }
    })
    .catch(error => {
        res.status(403).send(error.message)
    })
};