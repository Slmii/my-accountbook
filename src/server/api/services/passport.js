const mongoose       = require('mongoose');
const passport       = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
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
        callbackURL: '/auth/google/callback',
        proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({ 
            googleId: profile.id 
        });

        if (existingUser)
        {
            // THE 'USER OBJ' GETS ASSIGNED TO THE 'REQ'
            return done(null, existingUser);
        }

        const user = await new User({
            googleId: profile.id,
            email: profile.emails[0].value,
            name: profile.displayName
        }).save();

        // THE 'USER OBJ' GETS ASSIGNED TO THE 'REQ'
        done(null, user);
    })
);

passport.use(new FacebookStrategy({
        clientID: keys.facebookClientID,
        clientSecret: keys.facebookClientSecret,
        callbackURL: '/auth/facebook/callback',
        enableProof: true,
        profileFields: [
            'id', 
            'email', 
            'displayName',
            'last_name', 
            'first_name', 
            'gender', 
            'link', 
        ]
    },
    async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({ 
            facebookId: profile.id 
        });

        if (existingUser)
        {
            // THE 'USER OBJ' GETS ASSIGNED TO THE 'REQ'
            return done(null, existingUser);
        }

        const user = await new User({
            facebookId: profile._json.id,
            email: profile._json.email,
            name: profile._json.name
        }).save();

        // THE 'USER OBJ' GETS ASSIGNED TO THE 'REQ'
        done(null, user);
    })
);