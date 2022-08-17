const express = require('express');
const router = express.Router();

//----------------------------------------------------------------------------
const dataModel = require("../models/book")
const dataModel2 = require("../models/author")
const newBookAuthorController = require("../controllers/authorController")
//------------------------------------------------------------------------------

// const UserModel= require("../models/userModel.js")
//const UserController= require("../controllers/userController")

//----------------------------------------------------------------------
//const BookController= require("../controllers/bookController")

//-------------------------------------------------------------------
// BookData Path
const newBookModel = require("../models/bookModel2")
const newBookController = require("../controllers/bookController2")
//--------------------------------------------------------------------

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//---------------------------------------------------------------
// router.post("/createUser", UserController.createUser)

// router.get("/getUsersData", UserController.getUsersData)
//------------------------------------------------------------------

//---------------------------------------------------------------------
// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)
//--------------------------------------------------------------------

//------------------------------------------------------------------
// BookData Assignment Date: 16/08/22
router.post("/createBook2", newBookController.createBookPublic)

router.get("/getBookList", newBookController.bookListPublic)

router.get("/getbookyear", newBookController.getBooksInYearPublic)

router.get("/getrandom", newBookController.getRandomBooksPublic)

router.get("/getbookbyprice", newBookController.getbookINRPublic)

router.get("/particularbook", newBookController.getParticularBooksPublic)
//-------------------------------------------------------------------------------------

// Book and Author Database Assignment , Date: 17/08/22

router.post("/createbookbyid", newBookAuthorController.createBookWithId)

router.post("/createauthorbyid", newBookAuthorController.createAuthorData)

router.get("/booklistbyid", newBookAuthorController.booklist)

router.get("/updateprice", newBookAuthorController.updatePrice)

router.get("/getauthorandid", newBookAuthorController.books)

module.exports = router;