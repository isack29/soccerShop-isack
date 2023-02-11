const express = require("express");
const router = express.Router();

//Traemos la respuesta JSON desde el controlador
const {getProducts, newProduct} = require("../controllers/productsController");

//Establecemos desde que ruta queremos ver el getProducts
router.route('/productos').get(getProducts);

//Establecemos ruta de newProduct
router.route("/producto/nuevo").post(newProduct); 

module.exports=router;























