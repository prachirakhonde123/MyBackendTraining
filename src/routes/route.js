const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

// router.get('/test-me', function (req, res) {
//     console.log('My batch is', abc.name)
//     abc.printName()
//     logger.welcome()

//     res.send('My second ever api!')
// });

// router.get('/students', function (req, res){
//     let students = ['Sabiha', 'Neha', 'Akash']
//     res.send(students)
// })

router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})

//// First Problem
// router.get('/movies',function(req,res){
//     let myMovies = ["KGF-chapter 2","Major","Uri","Border"]
//     console.log(myMovies)
//     res.send(myMovies)
// })


// Program No 2
// router.get('/movies/:indexNumber',function(req,res){
//     let myMovies = ["KGF-chapter 2","Major","Uri-The Surgical Strike","Border"]
//     let requestParams = req.params
//     let index = requestParams.indexNumber
//     if(index < myMovies.length){
//        res.send(myMovies[index])
//     }
//     else{
//         res.send("Enter Valid Number")
//     }
   
//     res.send("this is code")
// })


//Program No 3
router.get('/films',function(req,res){
    const film=[{'id':1,'name':'KGF-Chapter 2'},{'id':2,'name':'Major'},{'id':3,'name':'Uri-The Surgical Strike'},{'id':4,'name':'Border'}]
    res.send(film)
})


// Program No 4
router.get('/films/:filmNumber', function(req,res){
    let myMovies = [{'id':1,'name':'KGF-Chapter 2'},{'id':2,'name':'Major'},{'id':3,'name':'Uri-The Surgical Strike'},{'id':4,'name':'Border'}]
    let requestParams = req.params
    let index = requestParams.filmNumber

    if(index <= myMovies.length){
        index = index - 1
        res.send(myMovies[index])
    }
    else{
        res.send("No movie exists with this id")
    }

    res.send("Hey")
})

module.exports = router;

