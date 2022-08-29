const jwt = require("jsonwebtoken");
const { findByIdAndDelete, findById, findOneAndDelete } = require("../models/userModel");
const userModel = require("../models/userModel");


/// creating user
const createUser = async function (req, res) {
  let data = req.body;
  let savedData = await userModel.create(data);
  //console.log(req.newAtribute);
  res.send({ msg: savedData });
};


// To LoggedIn and generating token
const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });

   
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
  res.setHeader("x-auth-token", token);
  res.send({ status: true, token: token });
};


/// To get Users Data
const getUserData = async function (req, res) {
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
};


// Update the user
const updateUser = async function (req, res) {

  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.send({ status: true, data: updatedUser});
};


// To delete the user and change the flag
const deleteUser1 = async function(req, res) {    
  let userId = req.params.userId
  let user = await userModel.findById(userId)
  if(!user) {
      return res.send({status: false, message: "no such user exists"})
  }
  let updatedUser = await userModel.findOneAndUpdate({_id: userId},{$set : {isDeleted: true}}, {new: true})
  res.send({status: true, data: updatedUser})
}






module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deletUser1 = deleteUser1