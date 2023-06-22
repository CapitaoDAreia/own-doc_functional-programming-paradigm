/*
    * FUNCTIONS
        - REDUCE: executes a user-supplied "reducer" callback function on each element of the array, 
        in order, passing in the return value from the calculation on the preceding element. 
        The final result of running the reducer across all elements of the array is a single value.
*/

//Example 1
const arr = [1, 2, 3, 4]
const sumFunc = (ac, el) => ac + el
const sumArr = arr.reduce(sumFunc, 0)
console.log(sumArr)

//Challenge
//Sum total of all elements x price
const cart = [
    {name: "Caneta", qtde: 10, price: 7.99, fragile: true},
    {name: "Impressora", qtde: 1, price: 649.50, fragile: true},
    {name: "Caderno", qtde: 4, price: 27.10, fragile: false},
    {name: "Lapis", qtde: 3, price: 5.82, fragile: false},
    {name: "Tesoura", qtde: 1, price: 19.20, fragile: true},
]

const resultFunc = (ac, el) => (el.qtde * el.price) + ac
const resultArr = cart.reduce(resultFunc, 0)

console.log(resultArr)


/*
    CHALLENGE 2
        1. fragile: true
        2. qtde & price
        3. average of all total prices
*/

//1
const isFragileFunc = el => el.fragile === true
const isFragile = cart.filter(isFragileFunc)
console.log(isFragile)

//2
const getQtdePrice = el => el.qtde * el.price
const qtdePrice = cart.map(getQtdePrice)
console.log(qtdePrice)

//3
const sumTotalPrices = cart.reduce(resultFunc, 0)

function calcAverage(arr){
    return function(totalCalcFn){
        return totalCalcFn / arr.length
    }
}
const average = calcAverage(cart)(sumTotalPrices)
console.log(average)
