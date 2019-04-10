/**
 * Express route for Google OAuth
 */

//passport handles google OAuth 
const passport = require('passport')

//app is an express object. It is passed here from index.js
module.exports = (app) =>{

//log in via google 
    app.get(
        '/auth/google', 
        passport.authenticate('google', {
            scope:['profile', 'email']
        })
    );

//google knows to kick user back to /callback. this is the response route
    app.get(
        '/auth/google/callback', 
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/'); 
        }); 

//logout user
    app.get('/api/logout', (req,res) => {
        req.logout(); 
        res.redirect('/');
    });

//current user
    app.get('/api/current_user',(req,res)=>{
        res.send(req.user);
    });
};