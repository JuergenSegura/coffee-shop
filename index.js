const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
require('dotenv').config({ path: './variables.env' });




//CCREAR SERVIDOR DE EXPRESS
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.BD_URL,{
// mongoose.connect('mongodb://localhost/restapis', {
    useNewUrlParser: true
});

//HABILITAR EL BODY PARSER 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//RUTAS DE LA APP
app.use('/', routes());

//PUERTO POR EL QUE ESCUCHA => 5000
const host =process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 5000;

//INICIAR APP
app.listen(port, host, ()=>{
    console.log('El servidor esta funcionando en el puerto 5000');
})