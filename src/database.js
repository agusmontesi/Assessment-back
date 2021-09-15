const mongoose = require('mongoose');

const uri = "mongodb+srv://admin:admin123@api-rest.in0tq.mongodb.net/api-rest?retryWrites=true&w=majority";

mongoose.connect(uri)
.then(db => 
    
    console.log('DB is connected'))


module.exports = mongoose