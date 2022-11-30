const fs = require('fs')
const http = require('http')

//////////////////////////////////////////
// FILE
// fs.readFile('./txt/start.txt', 'utf-8', (err, data)=>{
//     console.log( ` async way \n ${data}`)
// })

// const text = fs.readFileSync('./txt/input.txt', 'utf-8')
// console.log(text)

// const textOut = `the file reads as 🔥🔥🔥🔥🔥🔥🔥 '${text}'`

// fs.writeFileSync('./txt/start.txt',  textOut)

// const textO = fs.readFileSync('./txt/start.txt', 'utf-8')

// console.log(textO)

////////////////////////////
// SERVER 

const server = http.createServer((req, res)=>{
    res.end('<h1>Hello, world</h1>')
})

server.listen(3000, ()=>{
    console.log('server running')
})