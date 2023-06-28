/*
    * FUNCTIONAL PROGRAMMING PRINCIPLES

    RECURSION:
    - Recursion is a concept of FP that manifests itself when a function calls
    itself directly or indirectly until reaching a stop condition.

    - ARTICLE: https://medium.com/@andy.nguyen.1993/functional-programming-recursion-and-tail-call-optimization-tco-9b4b1376fe22#:~:text=Recursion%20is%20a%20widely%20used,calls%20itself%20directly%20or%20indirectly

    "By definition, recursion is the method of solving a problem by dividing it into smaller pieces. In programming, a function is recursive when it directly calls itself."
*/


//-------------------------------------------
// is recursive when it directly calls itself
/*
    EXAMPLE 1 - Factorial Function
    In this example, we implementates the factorial function. Note that
    we have a condition that validates if the call is valid, if it is, a
    call to itself occurs in the function.
*/
function factorial(n) {
    if (n === 0) { // stop condition
        return 1
    }

    return n * factorial(n - 1) // recursive call: n! = n * (n - 1)
}

//Another approach...
const calcFactorial = n => (n === 0) ? 1 : (n * calcFactorial(n - 1))


/*
    EXAMPLE 2 - Head Recursion
    Here, we calculate the accumulated sum from 1 until n.
    In this manifestation of recursion, the recursive call occurs in the beginning of
    the function and its result is used for another purpose.
*/
function sumRange(n) {
    if (n === 1) return 1 //stop condition
    const previousSum = sumRange(n - 1); // recursion as first instruction
    return n + previousSum; // do something with the recursive call
}

//Another approach...
const acumulateRange = n => (n === 1) ? 1 : (acumulateRange(n - 1) + n)


/*
    EXAMPLE 3 - Tail Recursion
    In this manifestation, the recursive call occurs as the last instruction of the function,
    without any additional posterior operation, returning its result.
*/
function countdown(n) {
    if (n === 0) return //stop condition
    console.log(`This is n: ${n}`)
    console.log(`And this is n*10: ${n * 10}`)
    return countdown(n - 1); //recursion as last instruction
}

//Another approach...
const handleN = n => new Promise(resolve => resolve(n))
const countDown = n => {
    if (n === 0) return
    handleN(n)
        .then(result => {
            console.log(`This is n: ${result}`)
            console.log(`And this is n*10: ${result * 10}`)
        })

    return countDown(n - 1)
}