import "../styles/Navbar.css"

import { Link } from "react-router-dom"



export default function Navbar(){
  return (
    <div className="nav-container">
        <nav className="navbar">
        <Link to={"/"}> Inicio</Link>
        <Link to={"/productos"}> Productos</Link>
            <Link to={"/contacto"}> Contacto</Link>

        </nav>
    </div>
  )
}


