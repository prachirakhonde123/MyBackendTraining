const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId

const newbookSchema = new mongoose.Schema({

    name : String,

    author_id : {
        type : ObjectId,
        required : true,
        ref : "newAuthor"
    },

    price : Number,
    ratings : Number,

    publisher_id : {
        type : ObjectId,
        required : true,
        ref : "Publisher"
    },

    isHardCover : {
        type : Boolean,
        default : false
    }


}, { timestamps : true });

module.exports = mongoose.model('MyBooks', newbookSchema)