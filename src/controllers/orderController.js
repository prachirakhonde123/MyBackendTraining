const orderModel = require("../models/orderModel")
const purchaserModel = require("../models/purchaserModel")
const productModel = require("../models/productModel")
const { trusted } = require("mongoose")


const order = async function(req,res){
    const orderdata = req.body
    const orderHeader = req.headers.isfreeappuser
    orderdata.isFreeAppUser = req.headers.isfreeappuser
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
    
    let myOrder = await orderModel.create(orderdata)
    if(orderHeader == "false"){
        if(validUser.balance >= orderdata.amount){
            let productPrice = validProduct.price

            let updateDetails = await purchaserModel.updateOne(
                {_id : validUser},
                {$inc : {balance : -productPrice}},
                {$set : {isFreeAppUser : orderHeader}}
            )

            let updatePrice = await orderModel.updateOne(
                {_id : myOrder._id},
                {$set : {amount : productPrice}},
                {new : true}
            )

            res.send({msg : myOrder})
        }

        else if(validUser.balance <= orderdata.amount){
            res.send({msg : "Sorry! User doesn't have enough balance"})
        }
    }

    else if(orderHeader == "true"){
        let updateOrder = await orderModel.updateOne(
            {_id : myOrder._id},
            {$set : {amount : 0}},
            {new : true}
        )
        

        res.send({msg :myOrder})
    }
    
}

module.exports = order