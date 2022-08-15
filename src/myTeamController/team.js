const Cricket_com = require("../Myteam/cricket")

const createPlayerData = async function(req,res){
    let playerData = req.body
    let savedPlayerData = await Cricket_com.create(playerData)
    res.send({Player: savedPlayerData})
}

const getPlayerData = async function(req,res){
    let displayPlayer = await Cricket_com.find()
    res.send({PlayerList: displayPlayer})
}

module.exports.createPlayerData = createPlayerData
module.exports.getPlayerData = getPlayerData