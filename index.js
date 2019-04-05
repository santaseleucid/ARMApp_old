/**
 * main program flow begins here, at index.js
 * 
 */

const express = require('express'); 
const mongoose = require('mongoose');
const keys = require('./config/keys')
require('./models/User'); 
require('./services/passport'); 
const authRoutes = require('./routes/authRoutes');

//connect to mongo 
mongoose.connect(keys.mongoURI); 
//new express app for request handling
const app = express(); 
authRoutes(app); 
//what port to listen to depending on prod or dev
const PORT = process.env.PORT || 5000; 
app.listen(PORT);