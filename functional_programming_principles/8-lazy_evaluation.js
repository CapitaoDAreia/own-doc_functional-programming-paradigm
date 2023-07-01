/*
    * FUNCTIONAL PROGRAMMING PRINCIPLES

    LAZY EVALUATION:
    - Is a strategy where the evaluation of expressions is delayed until the value
    of this same expressions be strictly necessary. This technique allows us to avoid
    unecessary operations and optimize the resources consume.
*/

/*
    EXAMPLE 1 - In this example, you can see that 'sumValuePlusValueAndOther' does a pre processment when
    its result is attributed in 'preCalc' function. The result of 'sumValuePlusValueAndOther', precalculated and
    used in others functions represents perfectly the concept of lazy evaluation.

    Note that this concept is an extension of currying and closure concepts.
*/

const sumValuePlusValueAndOther = value => {
    const valueTwice = value + value
    return (newValue) => {
        return valueTwice + newValue
    }
}

const preCalc = sumValuePlusValueAndOther(3)

const result1 = preCalc(1)
const result2 = preCalc(5)
const result3 = preCalc(10)


/*
    EXAMPLE 2 - Returning numbers only in call

    In this case, we have a function that generate new numbers based on an increment logic. 
    The 'generateNumbers' function will return a number each time that be called, implementing the lazy evaluation concept.
*/

function generateNumbers() {
    let i = 0;
    return () => {
        const number = i;
        i++;
        return number;
    };
}

const lazyNumber = generateNumbers();
