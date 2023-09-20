import "../styles/SearchBar.css";
import { useRef } from "react";

const SearchBar = ({ setSearchBar }) => {
  const searchText = useRef();
  const handleSearch = (e) => {
    e.preventDefault();

    setSearchBar(searchText.current.value);
  };
  return (
    <>
      <form onSubmit={handleSearch} className="forSearch">
        <div className="searchBarContainer">
          <input
            className="buscador"
            type="search"
            name="search"
            id="search"
            placeholder="¿Qué estás buscando?"
            ref={searchText}
          />
          <input type="submit" value="🔍" id="searchBtn" />
        </div>
      </form>
    </>
  );
};
export default SearchBar;
