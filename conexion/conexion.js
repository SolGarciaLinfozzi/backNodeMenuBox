const mongoose = require('mongoose'); 
const dotenv = require('dotenv');   
dotenv.config();

//MONGO
const MONGOATLAS = process.env.MONGOATLAS;  

mongoose.connect(MONGOATLAS)
    .then(()=>{
        console.log('DataBase conectada');
    })
    .catch((error) => {
        console.log(`El error es: ${error}`);
    })