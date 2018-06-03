const passport = require('passport');

module.exports = (app) => {
    // AUTHENTICATE WHEN GOING TO THIS ROUTE
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

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });
};