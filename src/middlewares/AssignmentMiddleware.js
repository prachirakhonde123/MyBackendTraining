const moment = require('moment')

const MiddleWare1 = function(req, res, next){
   console.log("In Middleware 1 ");
   const today = moment()
   const Day = today.format("YYYY-MM-DD, HH:mm:ss")
   const myIp = "192.168.1.2";
   console.log(Day + " " + myIp);
   next()
}



module.exports.MiddleWare1 = MiddleWare1
