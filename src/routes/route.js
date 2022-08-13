const express = require('express');
const router = express.Router();
const BookModelUser = require("../bookmodel/bookmodel")


//const UserModel= require("../models/userModel.js")
//const UserController= require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createUser", async function(req,res){
    
// } )

// router.get("/getUsersData", UserController.getUsersData)



// Assignment Of creating database of books and printing the list of books
router.post("/createbookdata",async function(req,res){
    let getData = req.body
    let myData = await BookModelUser.create(getData)
    res.send({msg:myData})
})

router.get("/getbookdata",async function(req,res){
    let alldata = await BookModelUser.find()
    res.send({YourDataIsHere: alldata})
})

module.exports = router;