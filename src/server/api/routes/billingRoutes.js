const keys   = require('../config/keys');
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../../../middlewares/requireLogin");

module.exports = app => {
    // REFERENCE FOR EXPRESS.JS TO USE THE 'REQUIRELOGIN' MIDDLEWARE
    app.post('/api/stripe', requireLogin, async (req, res) => {
        const customer = await stripe.customers.create({
            email: req.body.token.email
        });
        
        const source = await stripe.customers.createSource(customer.id, {
            source: req.body.token.id
        });

        await stripe.charges.create({
            amount: 500,
            currency: "eur",
            description: `Charge €5,00 for: ${req.body.token.email}`,
            customer: source.customer
        });

        req.user.credits += 5;
        // SAVE THE NEW INFO OF THE USER IN THE MODEL BECAUSE WE INCREMENTED 5 CREDITS. ALL THE DATA IS ALREADY INSIDE THE 'REQ.USER' OBJECT
        const user = await req.user.save();
        
        // SEND BACK THE UPDATED USER MODEL
        res.send(user);
    });
};