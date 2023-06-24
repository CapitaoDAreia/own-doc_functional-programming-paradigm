/*
    FUNCTIONS
*/

/*
    FUNCTIONS AS PARAMETERS
*/
function logText(text="standard text"){
    console.log(text)
}

function executeFunctions(fn){
    if(typeof fn === 'function'){
        fn()
    }
}
executeFunctions(logText)

/*
    RETURNS A FUNCTION FROM ANOTHER FUNCTION
*/
function potentiation(base){
    return function(exp) {
        return Math.pow(base, exp)
    }
}
const potentiation2 = potentiation(2)
console.log(potentiation2(8))

//this result is possible in another way

const potentiation2_1 = potentiation(2)(9)
console.log(potentiation2_1)

