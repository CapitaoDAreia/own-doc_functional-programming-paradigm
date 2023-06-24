function whaitFor(time){
    const future = Date.now() + time
    while(Date.now() < future){}
}

setTimeout(()=>console.log("Exec 01"), 3000)

whaitFor(5000)
console.log("End")