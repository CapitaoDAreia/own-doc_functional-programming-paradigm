/*
    * FUNCTIONAL PROGRAMMING PRINCIPLES

    IMMUTABILITY:
    - This concept put up that the data must not be modified, instead, the
    operations are builded using existent data, evolving them and producing new
    data as result, preserving the integrity and originality of the data.
    - There are other concepts that bases immutability, like pure functions, that
    do not produces collateral effects.

    - ARTICLE: https://www.sandromaglione.com/techblog/immutability-practical-functional-programming-part-3

    "Practically speaking, immutability means that all your variables are constant (and not 'variable' 💁🏼‍♂️)."

*/

/*
    EXAMPLE 1 - Handle Immutable Data.
    Note that in this case we build our data without collateral effects or violation on the immutability concept.
*/
const isPrime = (number) => {
    const isDivisible = (divisor) => number % divisor === 0;
    const range = Array.from({ length: Math.floor(Math.sqrt(number)) }, (_, index) => index + 2);

    return !range.some(isDivisible) && number > 1;
};

const oddIntegerNumbers = [1, 3, 5, 7, 9]
const evenIntegerNumbers = [0, 2, 4, 6, 8]

const integers = [...oddIntegerNumbers, ...evenIntegerNumbers]

const primeNumbers = integers.filter(isPrime)


/*
    EXAMPLE 2 - Handle Data in a mutable way.
    Note that in this case we access an external array and modify them, which can initiate collateral effects and makes this function impure.
    
*/
const ordenate = arr =>{
    return arr.sort()
}

//One correct way can be...

const ordenate2 = arr =>{
    return [...arr].sort()
}


/*
    EXAMPLE 3 - Attribution By Reference
    In this case, we modified an object whose value is an reference to another obj.
    By this approach, we provoked an unwanted result violating the immutability principle.
*/
const obj1 = {
    key_1: "First Key",
    key_2: "Second Key",
}
const obj2 = obj1
obj2.key_1 = "Modified Key"

//A more appropriate approach
const newObj1 = {
    newKey_1: "New First Key",
    newKey_2: "New Second Key",
}

const newObj2 = {...newObj1}
newObj2.newKey_1 = "New Modified Key"
console.log(newObj1)


/*
    But, if obj2 was a parameter?
    Note that the result is the same...
*/
const modifyObj = (newObj) =>{
    newObj.key_2 = "Modified Key"
}

//For improve this example, we can do that, returning a new data based on an received data with the mods that we want...
const newModifyObj = (obj) =>{
    const newObj = {...obj}
    return newObj
}


