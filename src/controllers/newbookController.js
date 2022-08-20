const newbookModel = require("../models/newBookModel")
const authorModel = require("../models/newAuthorSchema")
const publisherModel = require("../models/publisherSchema")

///////////////////////////////////////////////////////////////////////////////

const createBook = async function(req,res){
    let newBookData = req.body
    let newBook = await newbookModel.create(newBookData)
    res.send({msg : newBook})
}

////////////////////////////////////////////////////////////////////////////////

const getBooks = async function(req,res){
    let books = await newbookModel.find().populate(['author_id','publisher_id'])
    res.send({msg : books})
}


/////////////////////////////////////////////////////////////////////////////


const bookData1 = async function(req,res){
    let findbook = req.body
    const {author_id, publisher_id} = findbook

    if(!author_id){
        res.send({ msg : "Err : Author Id is Mandatory"})
    }

    if(!publisher_id){
        res.send({msg : "Err : Publisher Id is Mandatory"})
    }

    
    let findauthor = await authorModel.findById(author_id)
    if(!findauthor){
        res.send({msg : "Wrong Author id. No such Author"})
    }

    let findpublisher = await publisherModel.findById(publisher_id)
    if(!findpublisher){
        res.send({msg : "Wrong publisher id. No such a publisher"})
    }

    else{
        let mybook = await newbookModel.create(findbook)
        res.send({msg : mybook})
    }
}

/////////////////////////////////////////////////////////////////////////////////

const updateHardCover = async function(req,res){
    let books = await newbookModel.find().populate('publisher_id')
    let coverupdate = await newbookModel.updateMany(
        {$or : [{publisher_id : "62ff97a84638fc37f0f7c471"},{publisher_id:"62ff98544638fc37f0f7c477"}]},
        {$set : {isHardCover : true}},
        {new : true}
    )
    res.send({msg : coverupdate})
}

//////////////////////////////////////////////////////////////////////////////////////

const updateprice = async function(req,res){
    let authorRating = await authorModel.find({rating:{$gt:3.5}}).select("_id")
    let updatedprice= await newbookModel.updateMany(
        {author_id:authorRating}, 
        {$inc: {price:+10}},
        ) 
    res.send({data : updatedprice})  
}




module.exports.createBook = createBook
module.exports.getBooks = getBooks
module.exports.bookData1 = bookData1
module.exports.updateHardCover = updateHardCover
module.exports.updateprice = updateprice