import React, { useContext, useRef } from "react";
import "../styles/SearchBar.css";
import { SearchContext } from "../context/SearchContext";
import myImageButton from '../../public/lupa.png';

const SearchBar = () => {
  const searchText = useRef();
  const { handleSearch } = useContext(SearchContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchText.current.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="forSearch">
        <div className="searchBarContainer">
          <input
            className="buscador"
            type="search"
            name="search"
            id="search"
            placeholder="¿Qué estás buscando?"
            ref={searchText}
          />
          <button type="submit" value="" id="searchBtn">
            <img src={myImageButton} className="imgLupa" alt="botón" />
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
