const orderModel = require("../models/orderModel")
const purchaserModel = require("../models/purchaserModel")
const productModel = require("../models/productModel")
const { trusted } = require("mongoose")


const order = async function(req,res){
    const orderdata = req.body
    orderdata.isFreeAppUser = req.headers.isfreeappuser
    const myOrder = await orderModel.create(orderdata)
    // res.send({msg : myOrder})
    console.log(myOrder)
    
    let myheader = req.headers.isfreeappuser
    if(myheader == true){
        const newOrder = await orderModel.updateMany(
            {$set : { amount : 0}},
            {new : true},
            {upsert : true}
        )
        res.send({msg : newOrder})
    }
    
}

module.exports = order