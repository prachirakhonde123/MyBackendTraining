const trimFunction = function(){
    const string = "   I am going to become a backend Developer    "
    console.log(string.trim())
}

const lowerCaseString = function(){
    const stringone = "I LOVE MY COUNTRY"
    console.log(stringone.toLowerCase())
}

const upperCaseString = function(){
    const stringTwo = "this is a string"
    console.log(stringTwo.toUpperCase())
}

module.exports.trimFunctionPublic = trimFunction
module.exports.lowerCaseStringPublic = lowerCaseString
module.exports.upperCaseStringPublic = upperCaseString