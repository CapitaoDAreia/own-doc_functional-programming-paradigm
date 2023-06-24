# FUNCTIONAL PARADIGM

- REFERENCES: Robert C Martin - Functional Programming: What? Why? When?

## First Class Function
- Functions are values: it means that functions can receive and return functions as values and variable can store functions as values.

- <div>
    <code>
    const fun = function(value)=>{
        return value
    }
    </code>    
</div>
</br>

## Function Composition
- You can handle functions as parameters, variables, calling them inside another function and more. That's the main principle of Functional Paradigm.

## Immutability Of Data
- That menans that this paradigm do not modify the data to apply an operation, instead, what happens is that the data evolves.
For example, if you call a function that iterates over an array of strings and return this array with any modification in each element, this function will make a copy of the main array and so apply the operation in the copied array. Because that, the FP demands more memory than OOP, by example.
