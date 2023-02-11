//mongoose: nos permite realizar querys a la base de datos
const mongoose = require("mongoose");


const connectDatabase = () => {
  mongoose.connect(process.env.DB_LOCAL_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(con => {
        console.log("Base de datos mongo conectada con el servidor: "+con.connection.host)
    }).catch(con => {
      console.log("Error: "+con)

    });

    
};

module.exports = connectDatabase;
