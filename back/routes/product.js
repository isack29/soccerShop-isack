const express = require("express");
const router = express.Router();

//Traemos la respuesta JSON desde el controlador
const {getProducts, newProduct, getProductById, updateProduct, deleteProduct} = require("../controllers/productsController");

//Establecemos desde que ruta queremos ver el getProducts
router.route('/productos').get(getProducts);

//Establecemos desde que ruta queremos ver el getProductById();

router.route("/producto/:id").get(getProductById);

//Establecemos ruta para crear un producto
router.route("/producto/nuevo").post(newProduct); 

//Establecemos la ruta para actualizar un producto

router.route("/producto/:id").put(updateProduct);

//Establecemos la ruta para eliminar un producto

router.route("/producto/:id").delete(deleteProduct);



module.exports=router;























