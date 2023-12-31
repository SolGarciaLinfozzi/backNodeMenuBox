//Librerias
//express
const express = require('express');

//cors
const cors = require('cors');

//dotenv
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 8080;

//conexion
require('./conexion/conexion');
const Consulta = require('./model/userModel')


const app = express();
const corsOptions = {
    origin: 'https://proyecto-menubox.vercel.app', // Coloca aquí el origen del frontend
    methods: ['GET', 'POST'],
};
  
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Rutas de la Aplicación
// GET
app.get('/', (req, res) => {
    res.send('<h1> Soy el back del MERN </h1>')
})

//POST
app.post('/', async (req, res) => {
    console.log(req.body);
    const { nombre, apellido, email, consulta } = req.body;
    console.log(`Mi nombre es ${nombre}, mi apellido es ${apellido}, mi mail es ${email} y la consulta es ${consulta}`)

    //Creamos la consulta
    const nuevaConsulta = new Consulta(req.body);

    console.log(`Nueva consulta: ${nuevaConsulta}`);

    //La guardamos en la DB
    await nuevaConsulta.save();
})

//Escucha de la app
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})