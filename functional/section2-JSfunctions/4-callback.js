/*
    FUNCTIONS
*/

/*
    Challenge

    - exec(sumInTerminal, 56, 38)
    - exec(subInTerminal, 182, 27)
*/
const sumInTerminal = (a, b) => a+b
const subInTerminal = (a, b) => a-b

function exec(fn, a, b){
    console.log(fn(a,b))
}

exec(sumInTerminal, 56, 38)
exec(subInTerminal, 182, 27)

//Callback
const cb = () => console.log("Executing...")
setInterval(cb, 2000)