const mongoose = require('mongoose');
const {Schema} = require('mongoose');  

//Configuramos con Schema nuestra colección de DB
const userSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }, 
    consulta: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: new Date()
    }
});

//Exportamos la configuración con el nombre de la colección
module.exports = mongoose.model('consultas', userSchema); // (nombre, schema)