//importar depedência
const express = require("express");
const path = require('path');
// iniando o express

const server = express();

// criar um rota
//utilizando os arquivos estáticos 
server.use(express.static('public'))
.get("/", (request , response) => {
   //arrow functions
   //return response.send("Olá mundo!"); 
   //console.log(path.join(__dirname,'views','index.html'))

   console.log(request.query)
   return response.sendFile(path.join(__dirname , 'views', 'index.html'))
});


//ligar o servidor
server.listen(5500);
