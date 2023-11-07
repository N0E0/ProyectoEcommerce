import { createContext } from "react";
import React from "react";
import { useState} from "react";


export const SearchContext = createContext();

export function SearchContextProvider(prop) {
  const [SearchBar, setSearchBar] = useState("");
  
  const handleSearch = (searchText) => {
    setSearchBar(searchText);
  };
  

  return (
    <>
      <SearchContext.Provider
        value={{
          SearchBar,
          handleSearch,
        }}
      >
        {prop.children}
      </SearchContext.Provider>
    </>
  );
}

