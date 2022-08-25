const purchaserModel = require("../models/purchaserModel")

const createPurchaser = async function(req,res){
   const user = req.body
   user.isFreeAppUser = req.headers.isfreeappuser
   const userCreated = await purchaserModel.create(user);
   res.send({msg : userCreated})

}

const getPurchaser = async function(req,res){
    const getPurchaserList = await purchaserModel.find()
    res.send({msg : getPurchaserList})
}


module.exports = {createPurchaser,getPurchaser}
