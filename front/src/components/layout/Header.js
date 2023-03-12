import React, { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <nav className="navbar row">
        <div className="col-12 col-md-3">
          <div className="navbar-brand">
            <img
              src="./images/laCancha.png"
              alt="LaCancha - Store"
              title="LaCancha - Store"
            ></img>
          </div>
        </div>

        <div className="col-12 col-md-6 mt-2 mt-md-0 text-center ">
          <div class="input-group">
            <input
              type="text"
              id="search_field"
              className="form-control"
              placeholder="¿Que producto busca?"
            ></input>
            <div class="input-group-append">
              <button id="search-btn" class="btn">
                <i class="fa fa-search" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="col-12 col-md3 mt-4 mt-md-0 text-center">
          <button className="btn" id="login-btn">Iniciar Sesión</button>
          <span id="cart" className="ml-3">Carrito</span>
          <span className="m-1" id="cart_count">2</span>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
