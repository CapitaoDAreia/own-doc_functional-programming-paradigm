//sum(x)(y)(z)
//my solution
function sum(x=0){
    return function(y=0){
        return function(z=0){
            return x + y + z 
        }
    }
}
let sumResult = sum(1)(1)(10)
console.log(sumResult)


//my solution
//calculate(3)(7)(fn)
function calculate(x=0){
    return function(y=0){
        return function(op="sum"){
            const operations = {
                sum: (a, b) => a + b,
                sub: (a, b) => a - b,
                mul: (a, b) => a * b,
                div: (a, b) => a / b 
            }

            if(op in operations){
                return operations[op](x, y)
            }else{
                return "Invalid op."
            }
        }
    }
}
let calculateResult = calculate(10)(10)("div")
console.log(calculateResult)

//prof solution
function calculateProf(x){
    return function(y){
        return function(fn){
            return fn(x, y)
        }
    }
}

function subProf(a, b){
    return a - b
}

function sumProf(a, b){
    return a + b
}

const calculateProfResult = calculateProf(10)(10)(sumProf)
console.log(calculateProfResult)