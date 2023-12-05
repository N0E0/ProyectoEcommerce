// MobileNavMenu.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa'; 
import '../styles/Mobilemenu.css';

const MobileMenu = ({ closeMenu }) => {
  return (
    <div className="mobile-nav-menu">
      <ul>
        <li onClick={closeMenu}>
          <Link className="user" to={'/user-login'}>Iniciar Sesión <FaUser className="logoSesion" size={20} /></Link>
        </li>
        <li onClick={closeMenu}>
          <Link to="/">Inicio</Link>
        </li>
        <li onClick={closeMenu}>
          <Link to="/productos">Productos</Link>
        </li>
        <li onClick={closeMenu}>
          <Link to="/sugerencias">Sugerencias</Link>
        </li>
        <li onClick={closeMenu}>
          <Link to="/Newproduct">Crear Sugerencia</Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
