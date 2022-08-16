const express = require('express');
const router = express.Router();
const BookModelUser = require("../bookmodel/bookmodel")
//----------------------------------------------------------------
const Cricket_com = require("../Myteam/cricket")
const myCricketTeam = require("../myTeamController/team")
//-----------------------------------------------------------------
const UserController = require("../controllers/userController")
const UserModel= require("../models/userModel.js")
//-------------------------------------------------------------------

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


// Sirs's Database
router.post("/createUser", UserController.createUser)
router.get("/getUsersData", UserController.getUsersData)



//Assignment Of creating database of books and printing the list of books
router.post("/createbookdata",async function(req,res){
    let getData = req.body
    let myData = await BookModelUser.create(getData)
    res.send({msg:myData})
})

router.get("/getbookdata",async function(req,res){
    let alldata = await BookModelUser.find()
    res.send({YourDataIsHere: alldata})
})


// Cricket Team
router.post("/createPlayerData",myCricketTeam.createPlayerData)
router.get("/getPlayerData", myCricketTeam.getPlayerData)


module.exports = router;