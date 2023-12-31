import "../styles/Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <ul className="nav-list">
          <li>
            <Link to={"/"} className="link">
              Inicio
            </Link>
          </li>
          <li>
            <Link to={"/productos"} className="link">
              Productos
            </Link>
          </li>
          <li>
            <Link to={"/sugerencias"} className="link">
              Sugerencias
            </Link>
          </li>
          <li>
            <Link to={"/Newproduct"} className="link">
              Nuevo Producto
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
