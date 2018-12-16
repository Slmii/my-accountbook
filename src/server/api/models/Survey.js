const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient');

// CREATE A NEW SURVEY COLLECTION
const surveySchema = new Schema({
    customer: String,
    title: String,
    body: String,
    subject: String,
    // SUB DOCUMENTS
    recipients: [RecipientSchema],
    // IS FEEDBACK GIVEN (FROM THE RECIPIENTS)
    yes: { type: Number, default: 0 },
    no: { type: Number, default: 0 },
    // REFERENCE/BELONGS TO A USER (BY OBJECTID: $oid), 'USER' COLLECTION IN MONGODB
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    dateSent: Date,
    lastResponded: Date
});

mongoose.model('surveys', surveySchema);