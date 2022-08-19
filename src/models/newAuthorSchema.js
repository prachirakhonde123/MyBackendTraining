const mongoose = require('mongoose');

const authorSchema1 = new mongoose.Schema( {
    authorName: String,
    age:Number,
    address:String,
    rating:Number

}, { timestamps: true });

module.exports = mongoose.model('newAuthor', authorSchema1)