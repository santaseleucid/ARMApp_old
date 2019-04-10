/**
 * main program flow begins here, at index.js
 * 
 */

 //requires
const express = require('express'); 
const mongoose = require('mongoose');
const keys = require('./config/keys')
const cookieSession = require ('cookie-session');
const passport = require('passport'); 
require('./models/User'); 
require('./services/passport'); 
const authRoutes = require('./routes/authRoutes');


//connect to mongo db
mongoose.connect(keys.mongoURI); 

//new express app for request handling
const app = express(); 

//tell express app to use cookies
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, //remember cookie for 30 days 
        keys: [keys.cookieKey] //in keys.js
    })
);

//tell passport that we are using cookies.. i think ? 
app.use(passport.initialize()); 
app.use(passport.session()); 

//pass control to authRoutes.js for authflow 
authRoutes(app); 


//If in production environment and routes are not defined by express, then look in frontend build dir
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('./client/build')); 

    const path = require('path'); 
    console.log(path); 
    app.get('/map', (req,res)=>{
        res.sendFile(path.join(__dirnname+'client/build/index.html'));
    });
}

//what port to listen to depending on prod or dev
const PORT = process.env.PORT || 5000; 
app.listen(PORT);