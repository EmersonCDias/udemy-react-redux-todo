const port = 3000
// Parser do corpo da requisição. Irá converter os caracteres num formato que possa ser transmitido através da internet
// Ex: Enviando o dado de um formulário 'Hello Günter' chegará no servidor assim => Hello%20G%C3%BCnter
const bodyParser = require('body-parser') 
const express = require('express')
const server = express()
const allowCors = require('./cors')

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, () => {
    console.log(`SERVER/BACK-END is listening on port ${port}`);
})

module.exports = server