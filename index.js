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
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ejemplo para permitir solicitudes desde una URL específica
const allowedOrigins = ['https://proyecto-menubox.vercel.app'];

// Configurar el middleware CORS para permitir solicitudes desde la URL específica
app.use(cors({
    origin: function (origin, callback) {
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('No permitido por CORS'));
        }
    }
}));

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