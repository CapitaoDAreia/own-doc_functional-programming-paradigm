/*
    How JS Works?
    More: https://miro.com/app/board/uXjVM9wstxA=/
*/
//Call stack and event queue

function fn4(){
    console.log("timeout...")
}

function fn3(){
    setTimeout(()=> fn4(), 3000) //event loop register this in event queue
    console.log("fn3") //pushes this and execute, then return for the previous functions
}

function fn2(){
    fn3() //then this
}

function fn1(){
    fn2() //then this
}

function main(){
    fn1() //then pushes this
}

main() //starts here - pushes this to stack