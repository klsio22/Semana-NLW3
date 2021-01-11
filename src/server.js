//importar depedência
const express = require("express");
const path = require("path");
const pages = require('./pages.js')
// iniando o express

const server = express();

server
   //utilizando os arquivos estáticos
   .use(express.static('public'))

   //configurar template engine 
   .set('views', path.join(__dirname,'views'))
   .set('view engine','hbs')

   //Rotas da aplicação
   .get("/", pages.index)

//ligar o servidor
server.listen(5500);
