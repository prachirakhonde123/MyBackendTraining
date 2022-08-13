const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
//const UserController= require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", async function(req,res){
    let dataOfBook = req.body
    let mydata = await 
}  )

router.get("/getUsersData", UserController.getUsersData)

module.exports = router;