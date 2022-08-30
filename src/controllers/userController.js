const jwt = require("jsonwebtoken");
const { findByIdAndDelete, findById, findOneAndDelete } = require("../models/userModel");
const userModel = require("../models/userModel");


//__________________________________Creating User___________________________________
const createUser = async function (req, res) {
  try{
    let data = req.body
    if(Object.keys(data).length != 0){
      let savedData = await userModel.create(data);
      res.status(201).send({ msg: savedData });
    }
    else{
      res.status(400).send({msg : "Bad Request/ No data send"})
    }
  }

  catch(err){
     res.status(500).send({msg : "Error", error : err.message})
  }
    
};


//__________________________________User Login & Generating Token__________________________________________________


const loginUser = async function (req, res) {
  try{
    let userName = req.body.emailId;
    let password = req.body.password;

    //If there is no Login data or no login data provided
    if(!userName || !password){
      res.status(400).send({msg : "Bad Request. Username and Password is Mandatory"})
    }

    //Login data provided
    else{
      try{
        // Proper Login Details and User Found
        let user = await userModel.findOne({ emailId: userName, password: password });
          let token = jwt.sign(
            {
              firstName : user.firstName,
              lastName : user.lastName,
              userId: user._id.toString(),
              batch: "plutonium",
              organisation: "FunctionUp",
            },
            "itisaverysecretcodezaybxc"
          );
          res.status(200).send({status: true, msg : token})        
      }
      
      // In this case no User found with given login details
      catch(err){
        res.status(401).send({msg : "Error! UnAuthorized User", error : err.message})
      }
    }
  }

  catch(err){
     res.status(500).send({msg : "Error", error : err.message})
  }
  
};



//________________________________________Get User Details__________________________________________________


const getUserData = async function (req, res) {
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  res.send({ status: true, data: userDetails });
};




//_________________________________________Update User___________________________________________________



const updateUser = async function (req, res) {
  try{
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    let userData = req.body;

    
    if(Object.keys(userData).length != 0){
      let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, {new : true});
      res.status(201).send({ status: "Modified User", data: updatedUser});     
    }
    
    // In this case no data is provided for updating user
    else{
      res.status(400).send({msg : "Error", error : "BAD REQUEST"})
    }
  }

  catch(err){
     res.status(500).send({msg : "Server Error"})
  }
};



//____________________________________Delete User__________________________________________________________


const deleteUser1 = async function(req, res) {    
  let userId = req.params.userId
  let updatedUser = await userModel.findOneAndUpdate({_id: userId},{$set : {isDeleted: true}}, {new: true})
  res.send({status: true, data: updatedUser})
}






module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deletUser1 = deleteUser1

