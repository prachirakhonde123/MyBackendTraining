const newbookModel = require("../models/newBookModel")

const bookdata = async function(req,res){
    let BookData = req.body
    let SavedBookData = await newbookModel.create(BookData)
    res.send({msg : SavedBookData})
}

const getBooks = async function(req,res){
    let books = await newbookModel.find().populate(['author_id','publisher_id'])
    res.send({msg : books})
}



module.exports.bookdata = bookdata
module.exports.getBooks = getBooks