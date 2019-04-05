/**
 * configures passport to use google oauth strategy 
 */

const passport = require('passport'); 
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users'); //1 argument inside model(one) means read 2 arguments model(one, two) means write

passport.serializeUser((user,done) =>{
    done(null, user.id);  
}); 

passport.deserializeUser((id, done)=>{
    User.findById(id)
        .then(user => {
            done(null, user);
        });
});

passport.use(new GoogleStrategy
    ({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback', // this is a relative path. so it defaults to http not https. since this is auth it should be https in production 
    proxy: true
    }, 
    (accessToken, refreshToken, profile, done) => 
    {
        User.findOne({ googleId: profile.id })
            .then((existingUser)=>{
                if(existingUser){
                    // we already have a record with given user id
                    done(null, existingUser); 
                }else{
                    new User({ 
                        googleId: profile.id
                    }).save()
                        .then(user => done(null, user));
                }
            })
    }
    )
); 
