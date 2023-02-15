const producto = require("../models/products");

//ver la lista de productos
exports.getProducts = async (req, res, next) => {
  const products = await producto.find();

  res.status(200).json({
    sucess: true,
    count: products.length,
    products,
  });
};

//Metodo que trae un producto por su id
exports.getProductById = async (req, res, next) => {
  const product = await producto.findById(req.params.id);

  if (!product) {
    res.status(404).json({
      sucess: false,
      message: "No encontramos el producto",
    });
  }
  res.status(200).json({
    sucess: true,
    message: "Aquí está tu producto",
    product,
  });
};

//Metodo update de un producto

exports.updateProduct = async (req, res, next) => {
  let product = await producto.findById(req.params.id); //Encontramos el producto por ID

  if (!product) {
    //verificacmos que el producto exista
    res.status(404).json({
      sucess: false,
      message: "No encontramos el producto",
    });
  }

  //Si existe el producto, actualizo los datos del producto
  product = await producto.findByIdAndUpdate(req.params.id, req.body, {
    new: true, //valida que solo los nuevos atributos se cambien
    runValidators: true,
  });

  //Cuando el producto se actualizó, respondo OK
  res.status(200).json({
    sucess: true,
    message: "Producto actualizado correctamente",
    product,
  });
};

//Creación de un nuevo producto /api/productos.
//HTTP, TIPO post
exports.newProduct = async (req, res, next) => {
  const product = await producto.create(req.body);
  res.status(201).json({
    sucess: true,
    product,
  });
};

//Eliminar un producto

exports.deleteProduct = async (req, res, next) => {
  const product = await producto.findById(req.params.id); //Encontramos el producto por ID

  if (!product) {
    res.status(404).json({
      sucess: false,
      message: "No encontramos el producto",
    });
  }

  await product.remove();

  res.status(200).json({
    sucess: true,
    message: "El pruducto ha sido eliminado correctamente"
  })

};


//HABLEMOS DE FETCH

//Ver todos los productos
//Ver por id