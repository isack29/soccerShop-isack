const mongoose = require("mongoose");
/*    

Productos - Atributos
- Nombre
- Precio
- Categoría
- Imagen
- Descripción,
- Calificaciones (1 a 5)
- Numero de calificaciones
- Opiniones/Review
- Vendedor
- Fecha en el registro en el sistemas

*/

//Mongo crea ids automaticamente cada vez que se agrega un nuevo objeto

//Creamos el esquema de producto
const productSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: [true, "Por favor registra el nombre del producto."],
    trim: true,
    maxLength: [
      120,
      "El nombre del producto no debe exceder los 120 caracteres.",
    ],
  },

  precio: {
    type: Number,
    required: [true, "Por favor registre el precio del producto."],
    maxLength: [
      8,
      "El precio del producto no puede estar por encima de 99.999.999$.",
    ],
    default: 0.0,
  },

  descripcion: {
    type: String,
    required: [true, "Por favor registre una descripción para el producto."],
  },

  calificacion: {
    type: Number,
    default: 0,
  },

  imagen: [
    {
      public_id: {
        type: String,
        required: true,
      },

      url: {
        type: String,
        required: true,
      },
    },
  ],

  categoria: {
    type: String,
    required: [true, "Por favor seleccione la categoría del producto."],
    enum: {
      values: [
        "Camisetas",
        "Shorts",
        "Medias",
        "Botines",
        "Retro",
        "Conjuntos",
      ],
    },
  },

  vendedor: {
    type: String,
    required: [true, "Por favor ingrese el vendedor de producto."],
  },

  inventario: {
    type: Number,
    required: [true, "Por favor registre el stock del producto."],
    maxLength: [5, "Cantidad maxima del producto no puede sobrepasarse 99999"],
    default: 0,
  },

  numCalificaciones: {
    type: Number,
    deafault: 0,
  },

  opiniones: [
    {
      nombreCliente: {
        type: String,
        require: true,
      },

      rating: {
        type: Number,
        required: true,
      },
      comentario: {
        type: String,
        required: true,
      },
    },
  ],

  fechaCreacion: {
    type: Date,
    deafault: Date.now
  }


});

module.exports = mongoose.model("productos", productSchema);
