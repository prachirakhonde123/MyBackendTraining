let axios = require('axios')

//____________________Assignment 2____________________________________

//_______________________________weather of London_________________________
let getWeather = async function(req,res){
    try{
        let name = req.query.q
        let id = req.query.appid

        let options = {
            method : "get",
            url : `http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${id}`
        }

        let result = await axios(options)
        let data = result.data
        res.status(200).send({msg : data})

    }
    catch(err){
        res.status(500).send({msg : "Error", error : err.message})
    }
}


//________________________Temperature of London________________________
let getTemperature = async function(req,res){
    try{
        let name = req.query.q
        let id = req.query.appid

        let options = {
            method : "get",
            url : `http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${id}`
        }

        let result = await axios(options)
        let data = result.data.main.temp
        res.status(200).send({msg : data})

    }
    catch(err){
        res.status(500).send({msg : "Error", error : err.message})
    }
}

//______________________________Sorting of cities with Temp_______________________

let getCitytemp = async function(req,res){
    try{
        let array = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityTemp = []
        
        for(let i = 0; i < array.length; i++){
            let tempObj = {city : array[i]} 
            let result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${array[i]}&appid=2301a63ed7466549d5f4d8423b1bee6f`)
            tempObj.temp = result.data.main.temp
            cityTemp.push(tempObj)
        }

        let sortedCity = cityTemp.sort((a,b)=>(a.temp-b.temp))
        res.status(200).send({msg : true, data : sortedCity})

    }

    catch(err){
        res.status(500).send({msg : "Error", error : err.message})
    }
}


module.exports.getWeather = getWeather
module.exports.getTemperature = getTemperature
module.exports.getCitytemp = getCitytemp