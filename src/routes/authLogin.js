const router = require('express').Router();
const jwt = require('jsonwebtoken')


router.post('/', async (req, res) => {
    let {user, password} = req.body;
    const token = jwt.sign({user}, 'secretKey');
    res.json({
        user, 
        password, 
        token
    })
});




module.exports = router;