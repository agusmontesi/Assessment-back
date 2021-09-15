const mongoose = require('mongoose');
const { Schema } = mongoose;

const Data = new Schema({
    continent : { type: String, },
    country : {type: String, },
    deaths: {type: Object},
    cases: {type: Object},
    tests: {type: Object}
})

module.exports = mongoose.model('CountryCoronavirusData', Data)