/*
    FUNCTIONS
*/

// Function Expression
const sum = function (values) {
    let sum = 0 
    values.forEach(element => sum += element)
    return sum
}
console.log("sum: " + sum([10, 10, 10]))


//Function Declaration
function calculateMedia(values){
    let amount = sum(values)
    return amount / values.length
}
console.log("average: " + calculateMedia([10, 10, 10]))





