/*
    * FUNCTIONAL PROGRAMMING PRINCIPLES

    FIRST CLASS FUNCTION:
    - A programming language has First Class Functions when functions in this same
    programming language are treated as any other variable.

    - First Class Functions, as Higher Order Functions, are typical concepts of
    the programming languages that implements the functional paradigm.
*/

/*
    EXAMPLE 1 - Function as variable.
*/

const returnText = (text= "standard text") => text

const text = returnText("Some text")