const newbookModel = require("../models/newBookModel")
const abc = require("../models/newAuthorSchema")
const xyz = require("../models/publisherSchema")

////////////////////////////////////////////////////////////////////////////////

const getBooks = async function(req,res){
    let books = await newbookModel.find().populate(['author_id','publisher_id'])
    res.send({msg : books})
}


/////////////////////////////////////////////////////////////////////////////


const bookData1 = async function(req,res){
    let findbook = req.body
    const {author_id, publisher_id} = findbook

    let findauthor = await abc.findById(author_id)
    if(!findauthor){
        res.send({msg : "Wrong Author id. No such Author"})
    }

    let findpublisher = await xyz.findById(publisher_id)
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
    res.send({msg : books})
}

//////////////////////////////////////////////////////////////////////////////////////

// const updateprice = async function(req,res){
//     let pricearr = await newbookModel.find().populate('author_id')
//     let newprice = await newbookModel.update(
//         {"author_id.ratings" : {$gt : 3.5}},
//         {$set : {price : +10}},
//         {new : true}
//     )
// }





module.exports.getBooks = getBooks
module.exports.bookData1 = bookData1
module.exports.updateHardCover = updateHardCover
//module.exports.updateprice = updateprice