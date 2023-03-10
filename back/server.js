const app = require("./app");


const connectDatabase = require("./config/database");


//setear el archivo de configuración
const dotenv = require("dotenv");
dotenv.config({path:"back/config/config.env"});


//congigurar base de datos
connectDatabase();

//Llamemos al server
const server = app.listen(process.env.PORT, () => {
    console.log("Servidor iniciado en el puerto: "+ process.env.PORT+" en modo: "+process.env.NODE_ENV);
});

