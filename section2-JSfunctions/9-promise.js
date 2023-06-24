/*
    * FUNCTIONS
    - Promisses
*/

//Example 1
let p = new Promise(function(cumprirPromessa){
    cumprirPromessa(3)
})

p.then(function(valor){
    console.log(valor)
})

/*
    Example2

    You can concatenate promises return using then method.
    Then method use as parameter the previous return and can 
    receive a callback function to handle params. 
*/
let p2 = new Promise(
    function(resolve){
        const arr = ["Igor", "Kawany", "Lunna", "Rhaví"]
        resolve(arr)
    }
)

const getName = (arr) => arr
const nameToLower = name => name.map(name => name.toLowerCase())
const logName = name => console.log(name)

p2
    .then(arr => arr.map(getName))
    .then(nameToLower)
    .then(logName)
    
