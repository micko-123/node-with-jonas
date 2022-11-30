const fs = require('fs')

// async
fs.readFile('./txt/start.txt', 'utf-8', (err, data)=>{
    console.log( ` async way \n ${data}`)
})

const text = fs.readFileSync('./txt/input.txt', 'utf-8')
console.log(text)

const textOut = `the file reads as '${text}'`

fs.writeFileSync('./txt/start.txt',  textOut)

const textO = fs.readFileSync('./txt/start.txt', 'utf-8')

console.log(textO)

