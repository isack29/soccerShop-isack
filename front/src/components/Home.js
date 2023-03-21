import React, { Fragment } from "react";

export const Home = () => {
  return (
    <Fragment>
      <h1 id="EncabezadoProductos">Ultimos Productos</h1>

      <section id="productos" className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-3 my-">
            <div className="card p-3 rounded">
              <img
                className="card-img-top mx-auto"
                src="./images/messiArgentina.jpeg"
                alt="Camiseta selección Argentina"
              ></img>
              <div className="card-body d-flex flex-column">
                <h5 id="tituloProducto"> <a href='#'>Camiseta Argenita 2023</a> </h5>

                <div className="rating mt-auto">

                    <div className="rating-outer">

                        <div className="rating-inner"> </div>
                        
                    </div>

                    <span id="numOpiniones">5 reviews</span>
                    
                </div>

                <p className="card-text">$120.000</p> <a href="#" id="verProducto" className="btn btn-block">
                    Ver detalles
                </a>

              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};


