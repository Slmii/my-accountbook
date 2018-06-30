// PROD.JS - PRODUCTION KEYS
module.exports = {
    googleClientID:         process.env.GOOGLE_CLIENT_ID,
    googleClientSecret:     process.env.GOOGLE_CLIENT_SECRET,
    facebookClientID:       process.env.FACEBOOK_CLIENT_ID,
    facebookClientSecret:   process.env.FACEBOOK_CLIENT_SECRET,
    stripePublishableKey:   process.env.STRIPE_PUBLISHABLE_KEY,
    stripeSecretKey:        process.env.STRIPE_SECRET_KEY,
    mongoURI:               process.env.MONGO_URI,
    cookieKey1:             process.env.COOKIE_KEY1,
    cookieKey2:             process.env.COOKIE_KEY2
};