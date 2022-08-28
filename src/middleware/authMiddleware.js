const router = require("../routes/route");

const mid1 = async function(req,res,next){
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];

    if(!token) 
    return res.send({ status: false, msg: "Token must be present" });

    else{
        next()
    }
}

module.exports.mid1 = mid1