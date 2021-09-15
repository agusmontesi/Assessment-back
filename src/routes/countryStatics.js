const router = require('express').Router();
const Data = require('../models/sync')
const jwt = require('jsonwebtoken')

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


router.get("/statics/:id", verifyToken , async (req, res) => {
    jwt.verify(req.token, 'secretKey', async (error , authData) => {
        if(!error){
        //Save the params into an a variable:
        const {id} = req.params;
        //Try to find that name params into the database
    
        const allCountries = await Data.find();
        const findCountry = allCountries.find(element => element.country === id )
        res.send(findCountry);
        } else {
            res.sendStatus(403);
        }
    })
  });

  module.exports = router