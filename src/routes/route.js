const express = require('express');
const router = express.Router();

//-------------------------------------------------------------------------
const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
//--------------------------------------------------------------------------

//---------------------------------------------------------------------------
const myauthor = require("../models/newAuthorSchema")
const newauthorcontroller = require("../controllers/newAuthorcontroller") //author
const publishercontroller = require("../controllers/publisherController") // publisher
const newbookController = require("../controllers/newbookController") // book
//-----------------------------------------------------------------------------

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


router.post("/newcreateAuthor", newauthorcontroller.createAuthor1)
router.get("/getnewauthordata", newauthorcontroller.getnewdataPublic)
router.post("/createpublisher", publishercontroller.createPublisher)
router.get("/getpublisher", publishercontroller.getPublisher)
router.post("/newbook", newbookController.bookdata)
router.get("/getallbooks", newbookController.getBooks)


//--------------------------------------------------------------------------------------



module.exports = router;