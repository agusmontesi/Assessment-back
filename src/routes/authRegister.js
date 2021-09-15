const router = require('express').Router();
const bcrypt = require('bcrypt')

router.post('/', async (req, res) => {
    let {user, password, confirmPassword} = req.body;
    let passwordHash = await bcrypt.hash(password, 8)

    console.log({
        user, passwordHash
    })
    if(user && password === confirmPassword){
    res.send('Funciona')
}
})

module.exports = router;