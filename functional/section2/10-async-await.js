/*
    * FUNCTIONS
    - Async / Await
*/

/*
    Example 1 - Using await to execute and resolve promises step by step,
    forcing the next step to wait the previous one.
*/
const waitFor = (time = 2000) => {
    return new Promise(resolve =>{
        setTimeout(()=> resolve(), time)
    })
}

const returnValueInTime = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 3000)
    })
}

const executeWaitFor = async () => { /*async here enables the function 
to use await flag turning its return in an promise
*/     
    const value = await returnValueInTime() //await is needed here to wait the promise to be resolved

    await waitFor() //the same here
    console.log(`Done first ${value + 1}...`)

    await waitFor() //and here
    console.log(`Done second ${value + 2}...`)
}

executeWaitFor()
