import SearchBar from "./Searchbar";
import "../styles/Header.css"
import { Link } from "react-router-dom";
import Carrito from "./Carrito";


function Header({setSearchBar}) {

  
  return (
    <>
    <header>
        <h1>GINOGA</h1>
        <SearchBar setSearchBar={setSearchBar} />
        <Link className="user" to={"/user-login"}>Iniciar Sesión </Link>
        <Carrito/>


    </header>
    </>
  );
}

export default Header
