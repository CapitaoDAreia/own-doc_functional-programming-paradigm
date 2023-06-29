/*
    * FUNCTIONAL PROGRAMMING PRINCIPLES

    CURRYING:
    - Well, perhaps currying is the most breathtaking concept in Functional Programming
    that i've seen until now. 
    Currying is a technique that allows you to create specialized functions from more
    generic functions, arming itself with the closure concept to feed this specialized 
    functions with initial parameters of theese generic functions.

    - ARTICLE: https://towardsdatascience.com/what-is-currying-in-programming-56fd57103431

    "Currying is the transformation of a function with multiple arguments into a sequence of single-argument functions."


    - ARTICLE : https://blog.bitsrc.io/functional-programming-part-3-the-powers-of-currying-213eb69b234b

    "A curried function is a function that keeps returning functions until all its params are fulfilled"
    */

/*
    EXAMPLE 1 - Understanding in a practical example

    In this example, 'sumWith' function receives a number and returns an anonymous
    function that receives a number. This anonymous function returns the param of 'sumWith'
    function plus the param of the anonymous function.

    This opens us the possibility of create a function that have an already known parameter, exactly
    how it happens in 'sumNumberWithThree', that is a function made from 'sumWith' function, that knows
    the lexical scope of 'sumWith' function, and will sum a previous parameter with a new parameter.
*/
const sumWith = (a = 0) => {
    return (b = 0) => {
        return a + b
    }
}
const sumNumberWithThree = sumWith(3)
const resultOfSumWithThree = sumNumberWithThree(2) //result: 5


/*
    EXAMPLE 2 - Enriched example

    In this example, we have 'calcDiscount' function that receives a discount tax and return an
    anonymous function that receives a price. From 'calcDiscount' function we can create other 
    functions that will calculate discounts only receiving the price, because the discount tax
    is a previous knowing value (because closure technique).
*/
const price1 = 20
const price2 = 40

const calcDiscount = (discTax) =>{
    return (price) =>{
        return price - (price * discTax)
    }
}

const disc10 = calcDiscount(0.1)
const disc20 = calcDiscount(0.2)

const price1Disc10 = disc10(price1) //result: 18
const price1Disc20 = disc20(price1) //result: 16

/*
    EXAMPLE 3 - Even Richer Example

    In this example, we calculate weighted average pre establishing the weights while
    creates a function to receive the grades and return the operation result.
    The logic is the same, the "child" function knows the scope and variables of their
    "parent" and can access them, while receives a parameter and can efetuate operations using
    the received parameters and the parents parameters.
*/

const calculateWeightedAverage = (weightArray) =>{
    return (gradesArray) => {
        if (weightArray.length !== gradesArray.length){
            throw new Error("weightArray and gradesArray must equals in length")
        }

        const weigthSum = weightArray.reduce((prev, curr) => prev + curr, 0)
        const sumProducts = weightArray.reduce((prev, curr, i) => prev + (curr * gradesArray[i]), 0)
    
        return sumProducts / weigthSum
    }
}

const calculateWeiAvWithWeights = calculateWeightedAverage([3, 2, 5])

const result1 = calculateWeiAvWithWeights([9, 7, 8]) //result: 6.7
