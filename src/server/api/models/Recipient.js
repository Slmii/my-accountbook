const mongoose = require('mongoose');
const { Schema } = mongoose;

// CREATE A NEW RECIPIENTS COLLECTION
const recipientSchema = new Schema({
    email: String,
    responded: { type: Boolean, default: false }
});

module.exports = recipientSchema;