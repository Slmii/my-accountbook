// KEYS.JS - FIGURE OUT WHAT SETS OF KEYS TO RETURN
if (process.env.NODE_ENV === 'production')
{
    // LOAD PROD KEYS
    module.exports = require('./prod');
}
else
{
    // LOAD DEV KEYS
    module.exports = require('./dev');
}