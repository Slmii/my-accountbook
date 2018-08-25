// 'NEXT' FUNCTION WILL BE CALLED WHEN MIDDLEWARE IS COMPLETE/FINISHED RUNNING
// IT WILL CALL THE NEXT MIDDLEWARE IN THE CHAIN
module.exports = (req, res, next) => {

    // IF THE USER OBJ DOESNT EXIST, THEN USER IS NOT LOGGED IN
    if (!req.user)
    {
        return res.status(401).send({ error: 'You must log in!' });
    }

    // USE THE NEXT MIDDLEWARE
    next();
};