/**
 * Express route for Google OAuth
 */

//passport handles google OAuth 
const passport = require('passport')

//app is an express object. It is passed here from index.js
module.exports = (app) =>{

    app.get(
        '/auth/google', 
        passport.authenticate('google', {
            scope:['profile', 'email']
        })
    );


    app.get('/auth/google/callback', passport.authenticate('google')); 

    app.get('/api/logout', (req,res) => {
        req.logout(); 
        res.send(req.user);
    });

    app.get('/api/current_user',(req,res)=>{
        res.send(req.user);
    });
};