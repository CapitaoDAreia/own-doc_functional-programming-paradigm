/*
    * FUNCTIONAL PROGRAMMING PRINCIPLES

    PURE FUNCTIONS:
    - A pure function is a function that its return is determined ONLY
    by the values that its received, the input values, without any collateral effects.

    - ARTICLE: https://www.sitepoint.com/functional-programming-pure-functions/#:~:text=A%20pure%20function%20is%20a,it%20does%20not%20change%20x%20.

    "It’s a coffee grinder: beans go in, powder comes out, end of story."

    - ARTICLE : https://blog.bitsrc.io/functional-programming-part-2-pure-functions-85491f3d7190


*/

//---------------------------------------------------------------------------------------------------
// A pure function is a function that its return is determined ONLY by the values that its received

/*
    EXAMPLE 1 - Impure function that access an out-block value
*/
const PI = 3.14

const areaCirc = (radius) =>{
    return radius * radius * PI
}


/*
    EXAMPLE 2 - Improving the impurity level 

    OBS: There are levels of impuriry, in this case, the changes chances for PI value are almost null. That is a impure function, because depends
    of an external value, but not so impure, because the chance of that value
    to change is almost null.
*/
const areaCirc2 = (radius) =>{
    return radius * radius * Math.PI
}


/*
    EXAMPLE 3 - Making pure and full applying core concepts

    OBS: In this case, the funtion receives all needed values to execute the work.
    So, this is a full pure function, a perfect coffee grinder example.
*/
const areaCirc3 = (radius, PI) =>{
    return radius * radius * PI
}


/*
    EXAMPLE 4 - Impure function, the value it's impossible to determinate 
    with accuracy any.

    OBS: The Math.random() value is determined by seconds since 1970, so,
    the predictability level of his return is close to zero. By this fact,
    this function has an impurity level, because its impossible, in all cases,
    to determine his return value.
*/
const generateRandomNumber = (min, max) =>{
    const factor = max - min + 1
    return parseInt(Math.random()*factor) + min
}


//-------------------------------------
// (...) without any collateral effects

/*
    EXAMPLE 5 - Impure function that triggers changes in external values.
    Note that the function increases an external variable.

*/
let executionQt = 0

const sum = (a, b) =>{
    executionQt ++
    return a + b
}


