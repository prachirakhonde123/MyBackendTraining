const mongoose = require('mongoose');

const cricketSchema = new mongoose.Schema({

    firstname:
    {
        type: String,
        required: true
    },
    lastname:
    {
        type: String,
        unique: true,
        required: true
    },
    age: Number,
    country: String,
    category: String,
    runs: Number,
    wickets: Number,
})

module.exports = mongoose.model('CricketData',cricketSchema)