const mongoose = require('mongoose');

const myAuthorSchema = new mongoose.Schema( {

    author_id : {
        type : Number,
        required : true,
        unique : true
    },

    author_name : String,
    age : Number,
    address : String

}, {timestamps : true} );

module.exports = mongoose.model('AuthorData',myAuthorSchema)

