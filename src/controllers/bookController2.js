const BookModel2 = require("../models/bookModel2");


// creating book
const createBook = async function(req,res){
    let bookData = req.body
    let savedData = await BookModel2.create(bookData)
    res.send({msg : savedData})
}

// print bookname and authorname in list
const bookList = async function(req,res){
    let myList = await BookModel2.find().select({bookName : 1, authorName : 1, _id : 0})
    res.send({msg : myList})    
}


//takes year as input in post request and gives list of all books published that year
const getBooksInYear = async function(req,res){
    let bookyear = req.query.year
    let book = await BookModel2.find({year : bookyear})
    res.send({msg : book})
}

//returns books that are available in stock or have more than 500 pages 
const getRandomBooks = async function(req,res){    
    let randomBook = await BookModel2.find({$or : [{stockAvailable : true}, {totalPages : {$gt : 500}}]})
    res.send({msg: randomBook})
}

//equest to return all books who have an Indian price tag of “100INR” or “200INR” or “500INR” 
const getbookINR = async function(req,res){
    //let bookByPrice = await BookModel2.find({$or:[{"prices.indianPrice":{$eq:"100INR"}},{"prices.indianPrice":{$eq:"200INR"}},{"prices.indianPrice":{$eq:"500INR"}}]})
    let bookByPrice =await BookModel2.find({"prices.indianPrice" : {$in : ["100INR","200INR","500INR"]}})
    res.send({msg : bookByPrice})
    
}


//take any input and use it as a condition to fetch books that satisfy that condition
const getParticularBook = async function(req,res){
    let data = req.body
    let particularBook = await BookModel2.find(data);
    res.send(particularBook)
}

module.exports.createBookPublic = createBook
module.exports.bookListPublic = bookList
module.exports.getBooksInYearPublic = getBooksInYear
module.exports.getRandomBooksPublic = getRandomBooks
module.exports.getbookINRPublic = getbookINR
module.exports.getParticularBooksPublic = getParticularBook
