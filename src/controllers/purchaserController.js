const purchaserModel = require("../models/purchaserModel")

const createPurchaser = async function(req,res){
    const purchaserData = req.body
    const headerData = req.headers.isFreeAppUser

    if(!headerData){
        res.send({msg : "Error : Header is Mandatory"})
    }
    else{
        const purchaserCreated = await purchaserModel
    }
}