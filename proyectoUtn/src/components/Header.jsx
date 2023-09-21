import SearchBar from "./Searchbar";
import "../styles/Header.css"
import { Link } from "react-router-dom";


function Header({setSearchBar}) {

  return (
    <>
    <header>
        <h1>GINOGA</h1>
        <SearchBar setSearchBar={setSearchBar} />
        <Link className="user" to={"/user-login"}>Iniciar Sesión </Link>
        <Link to={"/carrito"}/>


    </header>
    </>
  );
}

export default Header
