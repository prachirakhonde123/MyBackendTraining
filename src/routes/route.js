const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/random" , function(req, res) {
    res.send("hi there")
})


router.get("/test-api" , function(req, res) {
    res.send("hi FunctionUp")
})


router.get("/test-api-2" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5" , function(req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6" , function(req, res) {
    res.send({a:56, b: 45})
})

router.post("/test-post", function(req, res) {
    res.send([ 23, 45 , 6])
})


router.post("/test-post-2", function(req, res) {
    res.send(  { msg: "hi" , status: true }  )
})

router.post("/test-post-3", function(req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log( req.body )

    res.send(  { msg: "hi" , status: true }  )
})



router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    let ele= req.body.element
    arr.push(ele)
    res.send(  { msg: arr , status: true }  )
})

///////////////////////////////////////////////////////////////////////////////////
////Date : 10/08/2022 Assignment 1

let players =
[
    {
        "name": "manish",
        "dob": "1/1/1995",
        "gender": "male",
        "city": "jalandhar",
        "sports": [
            "swimming"
        ]
    },
    {
        "name": "gopal",
        "dob": "1/09/1995",
        "gender": "male",
        "city": "delhi",
        "sports": [
            "soccer"
        ]
    },
    {
        "name": "lokesh",
        "dob": "1/1/1990",
        "gender": "male",
        "city": "mumbai",
        "sports": [
            "soccer"
        ]
    },
]

   router.post('/players', function (req, res) {
    
    let newPlayer = req.body

    for(let i = 0; i < players.length; i++){
        let playerName = players[i] 
        if(newPlayer.name === playerName.name){
            res.send("Player is already exist!")
        }
    }
    players.push(newPlayer)
    
    res.send(  { data: players , status: true }  )
})

//////////////////////////////////////////////////////////////////////////////////////

let myArr = [10,67,880,456,34,78,90,576]
router.post("/post-query-2",function(req,res){
     
    let elementNo = req.query.elementNo
    
    console.log(myArr)
    console.log(elementNo)
    let finalArr = []

    for(let i = 0; i < myArr.length; i++){
        if(myArr[i] > elementNo) {
            finalArr.push(myArr[i])
        }
    }
    console.log(finalArr)
    res.send({data : finalArr, status : true})
})




//////////////////////////////////////////////////////////////////////////////////////////

//Assignment2 : Booking ID

let players1 =
[
    {
        "name": "manish",
        "dob": "1/1/1995",
        "gender": "male",
        "city": "jalandhar",
        "sports": [
            "swimming"
        ],
        "personId": "12"
    },
    {
        "name": "gopal",
        "dob": "1/09/1995",
        "gender": "male",
        "city": "delhi",
        "sports": [
            "soccer"
        ],
        "personId": "15"
    },
    {
        "name": "lokesh",
        "dob": "1/1/1990",
        "gender": "male",
        "city": "mumbai",
        "sports": [
            "soccer"
        ],
        "personId" : "20"
    },
]

router.get('/newplayers/:name/:id',function(req,res){

    let nameOfPlayer = req.params.name
    let statusOfBooking = req.params.id
    let details = req.body
    let flagForName = false
    let flagForId = false
    let i = 0;
    for( i = 0; i < players1.length; i++){
        let person = players1[i]
        if(person.name == nameOfPlayer){
            var j = i
            flagForName = true
            break
        }
    }

    for(let k = 0;k < players1.length; k++){
        let person1 = players1[k]
        if(person1.personId == statusOfBooking){
            flagForId = true
            break
        }
    }

    if(flagForId == false && flagForName == true){
        players1[j].personId = details
        res.send({data:players1,status:true})
    }

    else if(flagForName == false){
        res.send("Person doesn't exists!")
    }

    else if(flagForName == true && flagForId == true){
        res.send("BookingId is already given")
    }

    console.log("Code is running")
   
})

///////////////////////////////////////////////////////////////////////////

/// Voting ID
// Take input in an query params as votingAge and for all the people above that age,change
// votingStatus as true .Also return array consisting of only the person that can vote

let persons = [
    {
        name : "PK",
        age : 10,
        votingStatus : false
    },
    {
        name : "SK",
        age : 20,
        votingStatus : false
    },
    {
        name : "AA",
        age : 70,
        votingStatus : false
    },
    {
        name : "SC",
        age : 5,
        votingStatus : false
    },
    {
        name : "HO",
        age : 45,
        votingStatus : false
    }
]

router.post('/voting', function(req,res){
    let status = req.query.myAge
    let arr = []

    for(let i = 0; i < persons.length; i++){
        let iperson = persons[i]

        if(iperson.age > status){
            iperson.votingStatus = true
            arr.push(iperson)
        }
    }

    res.send({data : arr, status : "Above people are eligible for voting!"})
})


module.exports = router;