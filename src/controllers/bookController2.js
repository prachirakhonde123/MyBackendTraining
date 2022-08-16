const BookModel2 = require("../models/bookModel2");

const createBook = async function(req,res){
    let bookData = req.body
    let savedData = await BookModel2.create(bookData)
    res.send({msg : savedData})
}

const bookList = async function(req,res){
    let myList = await BookModel2.find().select({bookName : 1, authorName : 1, _id : 0})
    res.send({msg : myList})    
}

module.exports.createBookPublic = createBook
module.exports.bookListPublic = bookList