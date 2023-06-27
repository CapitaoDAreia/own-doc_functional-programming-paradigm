/*
    * FUNCTIONAL PROGRAMMING PRINCIPLES

    HIGHER ORDER FUNCTION:
    - A higher order function is a function that operates in other functions,
    taking this other functions as arguments or returning them. 


    - ARTICLE: https://medium.com/javascript-scene/higher-order-functions-composing-software-5365cf2cbe99#:~:text=A%20higher%20order%20function%20is,return%20a%20function%20as%20output

    "A higher order function is a function that takes a function as an argument, 
    or returns a function. Higher order function is in contrast to first order functions,
    which don’t take a function as an argument or return a function as output."
*/

//-----------------------------------------
// taking this other functions as arguments

/*
    EXAMPLE 1 - A Higher Order Function that receives a function as parameter
    and returns an expression based in that function.
*/
const sum = (...params) => params.reduce((prev, current) => prev + current, 0)
const mul = (...params) => params.reduce((prev, current) => prev * current)

const executeOp = (fn, ...params) => fn(...params)

const resultSum = executeOp(sum, 2, 2, 2, 100)
const resultMul = executeOp(mul, 2, 2, 2, 100)


//-----------------------------------------------------------
// taking this other functions as arguments or returning them

/*
    EXAMPLE 2 - A Higher Order Function that receives a function and returns a function
    that returns a promise that resolves in an previous received function.
*/

const executeOp2 = (fn, ...params) => {
    return () => new Promise(resolve => {
        resolve(fn(...params))
    })
}

executeOp2(sum, 2, 2, 2)()
    .then(result => sum(result, 5, 1))
    .then(result => mul(result, 10))
    .then(result => console.log(result))