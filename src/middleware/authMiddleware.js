const jwt = require("jsonwebtoken");
const router = require("../routes/route");

const mid1 = async function(req,res,next){
    let token = req.headers["x-auth-token"];

    if(!token) 
    return res.send({ status: false, msg: "Token must be present" });

    let decodedToken = jwt.verify(token, "itisaverysecretcodezaybxc");
    if (!decodedToken)
    return res.send({ status: false, msg: "Alert : Token is invalid" });

    else{
        next()
    }
}

module.exports.mid1 = mid1