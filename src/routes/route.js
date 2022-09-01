const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const MemeController = require("../controllers/memeController")
const weatherController = require("../controllers/weatherController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)
router.post("/cowin/getOtp", CowinController.getOtp)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date
router.get("/cowin/getDistrictbyId",CowinController.getDistrictById)

//__________Meme routes_________________________________________________
router.get("/meme/getMeme", MemeController.getMeme)
router.post("/meme/creatememe", MemeController.createMeme)

//____________________Weather routes__________________________________
router.get("/weather/getweather",weatherController.getWeather)
router.get("/weather/gettemp",weatherController.getTemperature)
router.get("/weather/sortedcity",weatherController.getCitytemp)


module.exports = router;