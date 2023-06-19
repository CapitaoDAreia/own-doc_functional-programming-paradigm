// arrow
const salute = name => `Hello, ${name ?? "unknown"}`
console.log(salute("Igor"))

//sum
const nums = [1, 2, 3]

const sumFun = array =>{
    let sum = 0

    array.forEach(element => sum += element)

    return sum
}

console.log(sumFun(nums))