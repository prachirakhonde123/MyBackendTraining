const express = require('express');
const abc = require('../introduction/intro')
const xyz = require('../logger/logger')
const pqr = require('../util/helper')
const mn = require('../validator/formatter')
const lodash = require('lodash');
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
    xyz.firstWelcome()
    pqr.printDatePublic()
    pqr.printMonthPublic()
    pqr.getBatchInfoPublic()
    mn.trimFunctionPublic()
    mn.lowerCaseStringPublic()
    mn.upperCaseStringPublic()
    const months = ['January', 'February', 'March', 'April', 'May',
        'June', 'July', 'August', 'September', 'October',
        'November', 'December'];
    console.log(lodash.chunk(months,3))

    const oddNum = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    const oddArr = lodash.tail(oddNum)
    console.log(oddArr)

    let Array = [[1, 2, 3, 4], [40, 34, 6], [3, 39, 40], [34, 56, 90, 67], [4, 39, 100]]
    console.log(lodash.union(Array))

    const pairsObj = [["horror", "The Shining"], ["drama", "Titanic"], ["thriller", "Shutter Island"], ["fantasy", "Pans Labyrinth"]]
    console.log([lodash.fromPairs(pairsObj)]);

    res.send("My second api")
});


router.get('/test-you', function (req, res) {
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data', function (req, res) {

})
module.exports = router;
// adding this comment for no reason




