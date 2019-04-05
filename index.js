/**
 * main program flow begins here, at index.js
 * 
 */

const express = require('express'); 
const mongoose = require('mongoose');
const keys = require('./config/keys')
const cookieSession = require ('cookie-session');
const passport = require('passport'); 
require('./models/User'); 
require('./services/passport'); 
const authRoutes = require('./routes/authRoutes');

//connect to mongo 
mongoose.connect(keys.mongoURI); 
//new express app for request handling
const app = express(); 

//use cookies
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

//tell passport that we are using cookies.. i think ? 
app.use(passport.initialize()); 
app.use(passport.session()); 


authRoutes(app); 


//what port to listen to depending on prod or dev
const PORT = process.env.PORT || 5000; 
app.listen(PORT);