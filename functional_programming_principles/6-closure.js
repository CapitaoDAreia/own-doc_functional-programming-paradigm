/*
    * FUNCTIONAL PROGRAMMING PRINCIPLES

    CLOSURE:
    - Closure is an phenomenon that occurs when a called function "remembers" 
    the lexical scope of his declaration, even when it is executed out of this scope.

    - ARTICLE https://medium.com/beginners-guide-to-mobile-web-development/closures-in-functional-programming-and-javascript-3ed730e08fc2
*/

/*
    EXAMPLE 1 - Two function, "same constants", but a different scope
    Note that in this example we have two functions that returns both three constants.
    This constants, in turn, have the same name and different values.

    You might think that this operation will cause a bug where the values of the constants
    will be overrided in second declaration, but not...

    The "returnXYZInsideValues" function will remember her lexical scope in the moment of her execution
    and will reference the constants in his scope.
*/
const x = "x"
const y = "y"
const z = "z"

const returnXYZOutsideValues = () => [x, y, z]

const namespace = (function () {
    const x = 1
    const y = 2
    const z = 3

    const returnXYZInsideValues = () => [x, y, z]

    return {
        returnXYZInsideValues
    }
})()
const namespaceResult = namespace.returnXYZInsideValues()
const outsideResult = returnXYZOutsideValues()


/*
    EXAMPLE 2 - Acessing scopes that form closures
    In this example, the outerFunction returns innerFunction, that have access 
    to the outerValue parameter variable, that belongs to the outerFunction's scope, even
    after the execution of outerFunction. This is possible because the internal function
    compose a closure with outerValue variable.
*/
function outerFunction(outerValue) {
    
    //innerFunction composes a closure with outerValue
    function innerFunction(innerValue) {
        console.log(outerValue + innerValue);
    }
    return innerFunction;
}

//creating instances of closures
const closure1 = outerFunction(10);
const closure2 = outerFunction(5);

//calling closures internal functions
closure1(5); // Output: 15
closure2(2); // Output: 7