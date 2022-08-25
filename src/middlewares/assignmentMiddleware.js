const purchaserModel = require("../models/purchaserModel")
const orderModel = require("../models/orderModel")
const productModel = require("../models/productModel")

const purchaserMid = function(req,res,next){
    if(!req.headers['isfreeappuser'])
        res.send({msg : "Header not found!"})
    
    else
        next()
    
}

const orderMid = async function(req,res,next){
    if(!req.headers.isfreeappuser){
        res.send({msg : 'Header not found'})
    }
    
    let uservalidId = req.body.purchaserId
    let productvalidId = req.body.productId
    let validUser = await purchaserModel.findById(uservalidId)
    let validProduct = await productModel.findById(productvalidId)

    if(!validUser){
        res.send({msg : "Invalid Purchaser"})
    }
    if(!validProduct){
        res.send({msg : "Invalid Product."})
    }
    else{
        next()
    }
}


module.exports = {purchaserMid,orderMid}
