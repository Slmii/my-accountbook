const mongoose       = require('mongoose');
const passport       = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys           = require('../config/keys');
const User           = mongoose.model('users');

// THESE 2 FUNCTIONS USE THAT DATA THAT'S INSIDE THE COOKIE
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => {
    User.findById(id)
    .then(user => done(null, user));
});

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
        User.findOne({ googleId: profile.id })
        .then(user => {
            if (user)
            {
                // USER WITH THE GOOGLE PROFILE ID ALREADY EXISTS
                done(null, user);
            }
            else
            {
                // ADD THE FOLLOWING DATA FROM THE GOOGLE INFO TO THE USERS COLLECTION
                new User({
                    googleId: profile.id,
                    email: profile.emails[0].value,
                    name: profile.displayName
                })
                .save()
                .then(user => done(null, user))
                .catch(error => console.log(error));
            }
        })
        .catch(error => console.log(error));
    })
);