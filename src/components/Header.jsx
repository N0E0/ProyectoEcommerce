import React, { useState, useEffect } from 'react';
import SearchBar from './Searchbar';
import Mobilemenu from './Mobilemenu';
import '../styles/Header.css';
import { Link } from 'react-router-dom';
import { FaUser, FaBars } from 'react-icons/fa';
import miimg from "../../public/carrito-de-compras.png"

function Header({ setSearchBar }) {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header>
        <Link to={'/'} className="logo">
          GINOGA
        </Link>
        <SearchBar setSearchBar={setSearchBar} />
        {isMobile && (
          <>
            <Link to={'/carrito'} >
              <img src={miimg} className="imgCarrito" alt="carrito" />
            </Link>
            <FaBars className="menu-icon" size={20} onClick={toggleMenu} />
          </>
        )}
        {!isMobile && (
          <>
            <Link className="user" to={'/user-login'}>
              Iniciar Sesión <FaUser className="logoSesion" size={20} />
            </Link>
            <Link to={'/carrito'} className="imgCarrito">
              <img src={miimg} className="imgCarrito" alt="carrito" />
            </Link>
          </>
        )}
      </header>
      {isMobile && menuOpen && <Mobilemenu />}
    </>
  );
}

export default Header;
