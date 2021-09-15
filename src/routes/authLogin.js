const router = require('express').Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user')


router.post('/', async (req, res) => {
    let {user, password} = req.body;
    // Create an unique token to restrict different directions
    const token = jwt.sign({user}, 'secretKey');
    // Search if the user already exist
    const findUser = await User.findOne({
        username: user
    })
    //If exist, get in
    if(findUser){
        res.json({
            message: 'Welcome',
            token
        })
    // If not, sent an error
    } else {
        res.send('The account not exist')
    }
});




module.exports = router;