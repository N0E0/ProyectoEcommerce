import React from "react";
import { Link } from "react-router-dom";

import miimg from "../../public/carrito-de-compras.png";
import "../styles/carrito.css";

function Carrito() {
  return (
    <Link to={"/carrito"}>
      <img src={miimg} alt="carrito" className="imgCarrito" />
    </Link>
  );
}

export default Carrito;
