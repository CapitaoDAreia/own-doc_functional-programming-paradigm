/*
    * FUNCTIONS
        - FILTER: method creates a shallow copy of a portion of a given array, 
        filtered down to just the elements from the given array that pass the test implemented by the provided function.
*/

//Example 1
const cart = [
    {name: "Caneta", qtde: 10, price: 7.99},
    {name: "Impressora", qtde: 0, price: 649.50},
    {name: "Caderno", qtde: 3, price: 27.10},
    {name: "Lapis", qtde: 4, price: 5.82},
    {name: "Tesoura", qtde: 1, price: 19.20},
]

const qtdAboveZero = item => item.qtde > 1

const validItems = cart.filter(qtdAboveZero)

console.log(validItems)
