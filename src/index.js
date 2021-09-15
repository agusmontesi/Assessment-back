const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors')


//Initialization

const app = express();
const {mongoose} = require('./database')

// Settings

app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(cors())
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}))

//Routes

app.use('/sync', require('./routes/sync.js'));
app.use('/statics', require('./routes/statics.js'));
app.use('/', require('./routes/countryStatics'));
app.use('/auth/login', require('./routes/authLogin'));
app.use('/auth/signup', require('./routes/authRegister'));


//Static files

app.use(express.static(path.join(__dirname, 'public')));

// Server starting 

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
});
