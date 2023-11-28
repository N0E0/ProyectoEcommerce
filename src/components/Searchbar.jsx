import { useContext, useRef } from "react";
import "../styles/SearchBar.css";
import { SearchContext } from "../context/SearchContext";


const SearchBar = () => {
 const searchText = useRef();
 const {handleSearch} = useContext(SearchContext)

 const handleChange = () => {
  handleSearch(searchText.current.value);
};

 const handleSubmit = (e)=>{
  e.preventDefault();
  handleSearch(searchText.current.value)
 }

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
            onChange={handleChange}
          />
           <button type="submit" value="" id="searchBtn">
          
          </button>
          </div>
      </form>
    </>
  );
};
export default SearchBar;
