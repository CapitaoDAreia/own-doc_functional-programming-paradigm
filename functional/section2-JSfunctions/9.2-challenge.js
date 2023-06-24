/*
    * FUNCTIONS
    - Promisses: Challenge
*/

/*
    Challenge: Promise that receives a path and returns the content of an readed file.
*/

const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, '99-data.txt')

const returnFileContent = (pathOfFile) =>{
    return new Promise((resolve, reject) => {
        fs.readFile(pathOfFile, (err, content) => {
            return err ? reject(err) : resolve(content.toString()) 
        })
        
    })
}

returnFileContent(filePath)
    .then(content => console.log(content))
    .catch(error => console.log(error))