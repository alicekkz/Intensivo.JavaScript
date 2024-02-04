const http = require('http');
const express = require('express')
const aplicacao = express()

const servidorHttp = http.createServer(aplicacao);
const io = require('socket.io')(servidorHttp);

io.addListener('connection', (socket) => {
    console.log('um usuário conectou');
    socket.addListener('nova mensagem', (msg) =>{
        io.emit('nova mensagem', msg);
    })
});

const port = 1000;

aplicacao.use(express.static('public'));

servidorHttp.listen(port); //inserir o endereço do IPV4

console.log(`servidor rodando na porta: http://localhost:${port}`)