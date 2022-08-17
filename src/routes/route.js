const express = require('express');
const router = express.Router();

// const UserModel= require("../models/userModel.js")
//const UserController= require("../controllers/userController")
//----------------------------------------------------------------------
//const BookController= require("../controllers/bookController")

const newBookModel = require("../models/bookModel2")
const newBookController = require("../controllers/bookController2")
//--------------------------------------------------------------------

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)

router.post("/createBook2", newBookController.createBookPublic)

router.get("/getBookList", newBookController.bookListPublic)

router.get("/getbookyear", newBookController.getBooksInYearPublic)

router.get("/getrandom", newBookController.getRandomBooksPublic)

router.get("/getbookbyprice", newBookController.getbookINRPublic)

router.get("/particularbook", newBookController.getParticularBooksPublic)

module.exports = router;