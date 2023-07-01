/*
    * FUNCTIONAL PROGRAMMING PRINCIPLES

    FUNCTOR:
    - A functor is a data structure that can be mapped using a function, treated as an
    container that stores a collection of values. In JS, perfect examples is the arrays (lists). 

    - ARTICLE: https://blog.bitsrc.io/functional-programming-oh-functors-5e670d8eeb8d
*/

/*
    EXAMPLE 1 - A perfect example of functor: arrays (lists)
*/
const nums = [1, 2, 3, 4, 5] //typeof object
const numsx2 = nums.map(el => el * 2)


/*
    EXAMPLE 2 - Building a functor

    The 'Functor' function creates an object that encapsulates a value and provides
    an map method to aplicate a function to this value. 
*/
function Functor(value){
    return {
        value,
        isInvalid(){
            return this.value === null || this.value === undefined
        },
        map(fn) {
            if(this.isInvalid()){
                return Functor(null)
            }else{
                const newValue = fn(this.value)
                return Functor(newValue)
            }
        }
    }
}
const result = Functor("This is a text")
    .map(t => t.toUpperCase())
    .map(t => `${t}!!!`)


/*
    EXAMPLE 3 - Flat method to turn a matrice in an unique array
*/
const letters = [
    ['H', 'e', 'l', 'l', 'o'], 
    [' '],
    ['W', 'o', 'r', 'l', 'd'],
    ['!']
]
const flattedLetters = letters.flat(Infinity)
const resultE3 = flattedLetters
    .map(l => l.toUpperCase())
    .reduce((a,b) => a + b)


/*
    EXAMPLE 4 - Using flatMap method in Functor2

    The flatMap method maps each element using the map function and apply an leveling logic
    on this elements to brough all of them in the same array.
*/
function Functor2(value){
    return {
        value,
        isInvalid(){
            return this.value === null || this.value === undefined
        },
        map(fn) {
            if(this.isInvalid()){
                return Functor(null)
            }else{
                const newValue = fn(this.value)
                return Functor(newValue)
            }
        },
        flatMap(fn) {
            return this.map(fn).value
        }
    }
}