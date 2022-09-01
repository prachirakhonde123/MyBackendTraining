//__________________________Assignment 2 : Axios Assignment_____________________

let axios = require('axios')


//____________________________________To get Meme List___________________________
let getMeme = async function (req, res) {
    try {
        let options = {
            method: "get",
            url: `https://api.imgflip.com/get_memes`
        }

        let result = await axios(options)
        let data = result.data
        res.status(200).send({ msg: data })
    }
    catch (error) {
        res.status(500).send({ msg: "Error", error: error.message })
    }
}


//_____________________________To Create Meme______________________________________

let createMeme = async function (req, res) {
    try {
        let memeId = req.query.template_id
        let first = req.query.text0
        let second = req.query.text1
        let username = req.query.username
        let password = req.query.password

        let options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${memeId}&text0=${first}&text1=${second}&username=${username}&password=${password}`
        }

        let result = await axios(options)
        let data = result.data
        res.status(200).send({ msg: data })
    }

    catch(err){
         res.status(500).send({msg : "Error", error : err.message})
    }
}


module.exports.getMeme = getMeme
module.exports.createMeme = createMeme