import SearchBar from "./Searchbar";
import "../styles/Header.css"
import Carrito from "./Carrito";
function Header({setSearchBar}) {

  return (
    <>
    <header>
        <h1>GINOGA</h1>
        <SearchBar setSearchBar={setSearchBar} />
        <Carrito/>
    </header>
    </>
  );
}

export default Header
