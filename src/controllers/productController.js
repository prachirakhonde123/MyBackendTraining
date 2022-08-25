const productModel = require("../models/productModel")

const product = async function(req,res){
    const myProduct = req.body
    const productCreated = await productModel.create(myProduct)
    res.send({msg : productCreated})
}


module.exports = product