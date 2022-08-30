const jwt = require("jsonwebtoken");
const router = require("../routes/route");
const userModel = require("../models/userModel")

//__________________________________AUTHENTICATION____________________________________



const authenticate = async function(req, res, next) {
    try{
        let token = req.headers['x-auth-token'];
        let validUser = req.params.userId

//____________Checking Token is Present or not______________________________
        if(!token) 
        return res.status(401).send({ status: false, msg: "Token must be present" });


//____________Checking Valid User___________________________________________
        let userDetails = await userModel.findById(validUser);
        if (!userDetails)
        return res.status(401).send({ status: false, msg: "No such user exists" });

//______________Verifying Token______________________________________________
        let newdecodedToken = jwt.verify(token, "itisaverysecretcodezaybxc");
        req.decodedToken = newdecodedToken
        next()

    }
    
//__________________Token is Invalid_____________________________________________    
    catch(err){
        res.status(401).send({msg : "Invalid Token", error : err.message})
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//______________________________________AUTHORIZATION___________________________________-

const authorise = async  function(req, res, next) {
    try{
        mydecodedToken = req.decodedToken
        let userToBeModified = req.params.userId    
        let userLoggedIn = mydecodedToken.userId

        if(userToBeModified != userLoggedIn){         
        return res.status(403).send({msg : "Error!", error : "Unauthorized User"})
        }

        next()
    }

    catch(err){
        res.status(500).send({msg : "Server Error!"})
    }    
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////

module.exports.authenticate = authenticate
module.exports.authorise = authorise



