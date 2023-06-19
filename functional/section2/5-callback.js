/*
    FUNCTIONS
*/

//CALLBACK

const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, '99-data.txt')

function showContent(_, content){
    console.log(content.toString())
}

//callback happens here, in the second parameter
fs.readFile(filePath, showContent)