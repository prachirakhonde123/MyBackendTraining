const printDate = function(){
    const d = new Date()
    console.log(d)
}

const printMonth = function(){
    const m = new Date()
    let month = m.getMonth() + 1
    console.log('Current Month number is',month)
}

const batchName = "Plutonium"
const week = "W3D5"

const getBatchInfo = function(){
     console.log("Batch name is ",batchName)
     console.log("Week is ",week)
     console.log('The topic for today is NodeJs Module')
}

module.exports.printDatePublic = printDate
module.exports.printMonthPublic = printMonth
module.exports.getBatchInfoPublic = getBatchInfo