const mongoose = require('mongoose');
const { Schema } = mongoose;

// CREATE A NEW USER COLLECTION
const userSchema = new Schema({
    googleId: String,
    facebookId: String,
    email: String,
    name: String,
    // USE OBJ FOR OTHER CONFIGURATIONS (CHECK MONGOOSE DOCS)
    credits: { type: Number, default: 0 }
});

mongoose.model('users', userSchema);