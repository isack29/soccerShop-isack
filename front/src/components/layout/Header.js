import React, { Fragment } from "react";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';



const Header = () => {
  return (
    <Fragment>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-0q3UKQi4Q4mtG+XYt+b0LFwJRlpr0LCcnfS9XSHj5iLdEpG5D5B5ZjKg28OQVwHOGOx5yrIZytaXpiXN2C7krQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />

      <nav className="navbar row">
        <div className="col-12 col-md-3 col-sm-1">
          <div className="navbar-brand brandImg">
            <img src="./images/laCancha.png" alt="LaCancha Store - Logo " class=""></img>
          </div>
        </div>

        <div className="col-12 col-md-6 mt-2 mt-md-0">
          <div class="input-group">
            <input
              type="text"
              id="search_field"
              class="form-control ml-input"
              placeholder="¿Que producto buscas?"
            ></input>

            <div class="input-group-append">
              <button id="search-btn" class="btn">
                <i class="fa fa fa-search  text-white" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">

          <button className="btn btnLogin" id="login-btn">Iniciar Sesión</button>

          <i id="cart" className="ml-3"><ShoppingCartIcon/></i>
          
          <span className="ml-1" id="cart_count">2</span>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
