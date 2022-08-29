const jwt = require("jsonwebtoken");
const router = require("../routes/route");
const userModel = require("../models/userModel")

const authenticate = async function(req, res, next) {
    let token = req.headers['x-auth-token'];
    let validUser = req.params.userId

    if(!token) 
    return res.send({ status: false, msg: "Token must be present" });
    
    let user = await userModel.findById(validUser)
    if(!user) return res.send({status: false, msg: 'No such user exists'})

    let decodedToken = jwt.verify(token, "itisaverysecretcodezaybxc");
    if (!decodedToken)
    return res.send({ status: false, msg: "Alert : Token is invalid" });

    else{
        req.decodedToken = decodedToken
    //     key               variable
        //  console.log("in authenticate");
        //  console.log(decodedToken);
        next()
    }
}


const authorise = async  function(req, res, next) {
    mydecodedToken = req.decodedToken
//  variable       taken access from authenticate middleware
    let userToBeModified = req.params.userId    
    let userLoggedIn = mydecodedToken.userId //taking out userId from mydecodeToken and storing it
    console.log("In authorise");
    console.log(mydecodedToken.userId); //get id from decoded token
    console.log(userToBeModified); // getting id from params
    
    if(userToBeModified != userLoggedIn)
    return res.send({status: false, msg: 'User Logged In have no access to update others data'})

    else{
        next()
    }
}

module.exports.authenticate = authenticate
module.exports.authorise = authorise