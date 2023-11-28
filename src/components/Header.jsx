import SearchBar from "./Searchbar";
import "../styles/Header.css"
import { Link } from "react-router-dom";
import Carrito from "./Carrito";
import { FaUser } from 'react-icons/fa';




function Header({setSearchBar}) {

  
  return (
    <>
    <header>
        <Link  to={"/"} className="logo" >GINOGA</Link>
        <SearchBar setSearchBar={setSearchBar} />
        <Link className="user" to={"/user-login"}>Iniciar Sesión  <FaUser className="logoSesion" size={20} /></Link>
        <Carrito/>


    </header>
    </>
  );
}

export default Header
