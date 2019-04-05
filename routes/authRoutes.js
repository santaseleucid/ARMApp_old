/**
 * Express route for Google OAuth
 */

//passport handles google OAuth 
const passport = require('passport')

//app is an express object. It is passed here from index.js
module.exports = (app) =>{
//1
    app.get(
        '/auth/google', 
        passport.authenticate('google', {
            scope:['profile', 'email']
        })
    );

//2
    app.get('/auth/google/callback', passport.authenticate('google')); 

};