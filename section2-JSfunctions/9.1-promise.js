/*
    * FUNCTIONS
    - Promisses
*/

/*
    * Example 1 - Callback hell, avoid this!!!

    setTimeout(function(){
    console.log("Exec callback...")

    setTimeout(function(){
        console.log("Exec second callback...")

        setTimeout(function(){
            console.log("Exec third callback...")
        }, 2000)

    }, 2000)

    }, 2000)
*/

/*
    Example 2 - A better approach
*/

function waitFor(time = 2000){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log(`Promise executed in ${time/1000} seconds...`)
            resolve()
        }, time)
    })
}

// waitFor(3000)
//     .then(() => waitFor(1000))
//     .then(() => waitFor(4000))


/*
    Example 3 - An synchronous approach
*/

const randomGenerator = (min, max) => (parseInt(Math.random() * (max - min + 1)) + min)
const validadeAndSortMinMax = (x, y) => x > y ? [y, x] : [x, y]

const generateRandomNumber = (x, y) => {

        const arr = validadeAndSortMinMax(x, y)

        return (generateFn) => {
            return new Promise(resolve => {
                resolve(generateFn(arr[0], arr[1]))
            })
        }
}

generateRandomNumber(10, 50)(randomGenerator)
    .then(number => [number, number * 10])
    .then(numArr => numArr.map((el, i) => i === 0 ? `Random number ${el}` : `Random number *10 equals ${el}`))
    .then(resArr => resArr.map(el => console.log(el)))