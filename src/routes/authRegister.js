const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');

router.post('/', async (req, res) => {
    let {user, password, confirmPassword} = req.body;
    // Hash the password
    let passwordHash = await bcrypt.hash(password, 8)
    //Search the user in the DB 
    const findUser = await User.findOne({
        username: user
    })
   //Verify if the user exist, if not, create that user
    if(!findUser){
        const createUser = {
            username : user,
            passwordHash, 
        }
        const newUser = new User(createUser);
        newUser.save()
        res.send('User Created!')
    //if exist, sent an message
    } else {
        res.send('User already exist')
    }
    })

module.exports = router;