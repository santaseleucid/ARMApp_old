/**
 * Mongoose model schema instance for a mongo collection 
 */

const mongoose = require('mongoose');
const { Schema } = mongoose; 

const userSchema = new Schema({
    googleId: String
});

mongoose.model('users', userSchema);  //1 argument inside model(one) means read; 2 arguments model(one, two) means write
