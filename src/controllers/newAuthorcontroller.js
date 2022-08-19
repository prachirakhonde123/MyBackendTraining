const newAuthorModel1 = require("../models/newAuthorSchema");

const createAuthor1 = async function(req,res){
    let data = req.body
    let savedData = await newAuthorModel1.create(data)
    res.send({msg : savedData})
}

const getnewdata = async function(req,res){
    let mydata = await newAuthorModel1.find()
    res.send({msg : mydata})
}

module.exports.createAuthor1 = createAuthor1
module.exports.getnewdataPublic = getnewdata
