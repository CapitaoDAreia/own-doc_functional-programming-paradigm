/*
    * FUNCTIONS
        - MAP: Creates a new array populated with the results of calling 
        function on every element in the calling array. Yes, map function will
        iterate over an provided array, and the result, based in the provided
        CB function is another array. 
*/

//Example 1

const nums = [1, 2, 3, 4, 5]
//OBS: callback function for map function that receives, in a sequence: value, index and the array itself
const cb = (n, i, a) => n * 2 + i + a.length
console.log(nums.map(cb))


//Example 2
const names = ["Igor", "Silva", "Daniel", "Kawany"]
const firstLetter = text => text[0]
const letters = names.map(firstLetter)
console.log(names, letters)


/*
    CHALLENGE
        - Function that maps the array and return only names -> []
        - Create another function that multiply qtd for price -> []

    const cart = [
        {name: "Caneta", qtde: 10, price: 7.99},
        {name: "Impressora", qtde: 0, price: 649.50},
        {name: "Caderno", qtde: 3, price: 27.10},
        {name: "Lapis", qtde: 4, price: 5.82},
        {name: "Tesoura", qtde: 1, price: 19.20},
    ]
*/

const cart = [
    {name: "Caneta", qtde: 10, price: 7.99},
    {name: "Impressora", qtde: 0, price: 649.50},
    {name: "Caderno", qtde: 3, price: 27.10},
    {name: "Lapis", qtde: 4, price: 5.82},
    {name: "Tesoura", qtde: 1, price: 19.20},
]

const namesArr = product => product.name
const qtdXpriceArr = product => (product.qtde * product.price).toFixed(2)

const namesArrResult = cart.map(namesArr)
const qtdXpriceArrResult = cart.map(qtdXpriceArr)

console.log(namesArrResult, qtdXpriceArrResult)
