const mongoose = require('mongoose');
const { Schema } = mongoose;

// CREATE A NEW USER COLLECTION
const userSchema = new Schema({
    googleId: String,
    facebookId: String,
    email: String,
    name: String
});

mongoose.model('users', userSchema);