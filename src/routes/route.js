const express = require('express');
const router = express.Router();

//-------------------------------------------------------------------------
const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
//--------------------------------------------------------------------------

//---------------------------------------------------------------------------
// Paths of Assignment of reference and populate
//____________________________________________________


const myauthor = require("../models/newAuthorSchema")
const newauthorcontroller = require("../controllers/newAuthorcontroller") //author
const publishercontroller = require("../controllers/publisherController") // publisher
const newbookController = require("../controllers/newbookController") // book

//-----------------------------------------------------------------------------
//------------------------------------------------------------------------------

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//---------------------------------------------------------------------------------
router.post("/createAuthor", authorController.createAuthor  )
router.get("/getAuthorsData", authorController.getAuthorsData)
router.post("/createBook", bookController.createBook  )
router.get("/getBooksData", bookController.getBooksData)
router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

//-------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------
// Assignment APIs
//_____________________________________

router.post("/newbook", newbookController.createBook) // create book not checking id
router.post("/newcreateAuthor", newauthorcontroller.createAuthor1) // create author api
router.get("/getnewauthordata", newauthorcontroller.getnewdataPublic) // get author api
router.post("/createpublisher", publishercontroller.createPublisher) // create publisher api
router.get("/getpublisher", publishercontroller.getPublisher) //get publisher api
router.get("/getallbooks", newbookController.getBooks) // to show booklist with id
router.post("/book",newbookController.bookData1)  // to create book by checking id
router.put("/updatecover",newbookController.updateHardCover)  // updating hardcover api
router.put("/newpriceofbooks", newbookController.updateprice) // updating price by 10


//--------------------------------------------------------------------------------------



module.exports = router;