
const producto = require("../models/products")

//ver la lista de productos
exports.getProducts=(req,res,next)=>{
    res.status(200).json({
        sucess:true,
        message:"En esta ruta usted va a poder ver a todos los products"
    })
}

//Creación de un nuevo producto /api/productos.
//HTTP, TIPO post
exports.newProduct=async(req, res, next) => {

    const product = await producto.create(req.body);
    res.status(201).json({
        sucess: true,
        product
    })
  

}






