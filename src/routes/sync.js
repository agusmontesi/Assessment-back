const router = require('express').Router();
const axios = require("axios").default;
const jwt = require('jsonwebtoken');
const Data = require('../models/sync');

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


// Api Config options
var options = {
  method: 'GET',
  url: 'https://covid-193.p.rapidapi.com/statistics',
  headers: {
    'x-rapidapi-host': 'covid-193.p.rapidapi.com',
    'x-rapidapi-key': '7b606e9be4msh3327a05809f498ap1bb325jsn0ebf5fe3deee'
  }
};



// Get all the statics
router.get('/', verifyToken, async (req, res) => {
  jwt.verify(req.token, 'secretKey', async (error , authData) => {
    if(!error){
     // Get the Covid info and safe that in a variable
   const data = await axios.request(options)
      .then(response => {
      return response.data.response
    })
    
  // Filter the data that I need for each element
    data.forEach( async element => {
      
         const countryDetail = {
        continent: element.continent,
        country: element.country,
        deaths: element.deaths,
        cases: element.cases,
        tests: element.tests
      }
      //Push to the Database each countryCovidDetail
       const FileDb = await new Data(countryDetail)
        FileDb.save()
       res.json(FileDb)
    });
    } else {
        res.sendStatus(403);
    }
})
});



module.exports = router;