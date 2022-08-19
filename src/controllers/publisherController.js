const publisherModel = require("../models/publisherSchema")

const createPublisher = async function(req,res){
    let mydata = req.body
    let data = await publisherModel.create(mydata)
    res.send({msg : data})
}

const getPublisher = async function(req,res){
    let x = await publisherModel.find()
    res.send({msg : x})
}

module.exports.createPublisher = createPublisher
module.exports.getPublisher = getPublisher