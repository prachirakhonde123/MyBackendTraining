
const assignment = async function(req,res){
   // const today = moment()
   // const Day = today.format("YYYY-MM-DD")
   // const myIp = "192.168.1.2";
   // console.log(Day + " " + myIp);
   console.log("/assignment")
   res.send({msg : "My code is in assignment"})

}

const middleware = async function(req,res){
   console.log("/middleware");
   res.send({msg : "My code is in middleware"})
}

module.exports.assignment = assignment
module.exports.middleware = middleware