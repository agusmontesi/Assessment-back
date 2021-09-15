const router = require('express').Router();
const Data = require('../models/sync');
const jwt = require('jsonwebtoken');


// Authorization: Bearer <token>
const verifyToken = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];

        if(typeof bearerHeader !== 'undefined'){
           const bearer = bearerHeader.split(" ");
           const bearerToken = bearer[1];
           req.token = bearerToken;
           next()
        } else {
            res.sendStatus(403);
        }
}


router.get('/', verifyToken ,async (req, res) => {

    jwt.verify(req.token, 'secretKey', async (error , authData) => {
        if(!error){
        const CovidData = await Data.find()
        await res.json(CovidData)
        } else {
            res.sendStatus(403);
        }
         
    })
});





module.exports = router, verifyToken;