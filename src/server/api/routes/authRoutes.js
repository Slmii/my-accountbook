const passport = require('passport');

module.exports = (app) => {
    // AUTHENTICATE WITH GOOGLE WHEN GOING TO THIS ROUTE
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));
    // CALLBACK URL FOR GOOGLE
    app.get('/auth/google/callback', passport.authenticate('google', {
            failureRedirect: '/login'
        }),
        (req, res) => {
            // SUCCESSFULL AUTHENTICATION, REDIRECT TO HOME
            res.redirect('/');
        }
    );

    // AUTHENTICATE WITH FACEBOOK WHEN GOING TO THIS ROUTE
    app.get('/auth/facebook', passport.authenticate('facebook', {
        authType: 'rerequest',
        scope: ['email']
    }));
    // CALLBACK URL FOR FACEBOOK
    app.get('/auth/facebook/callback', passport.authenticate('facebook', { 
        failureRedirect: '/login' 
    }),
    (req, res) => {
        // SUCCESSFULL AUTHENTICATION, REDIRECT TO HOME
        res.redirect('/');
    });



    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });
};