import React, { useState } from "react";

const CategoriasContainer = ({ handleCategoriaChange }) => {
    const categorias = ['Viento', 'Percusión', 'Cuerda', 'Teclado', 'Electrónica'];
  
    const [selectedCategorias, setSelectedCategorias] = useState([]);
  
    const handleCheckboxChange = (categoria) => {
      let updatedCategorias;
    
      if (selectedCategorias.includes(categoria)) {
        updatedCategorias = selectedCategorias.filter((cat) => cat !== categoria);
      } else {
        updatedCategorias = [...selectedCategorias, categoria];
      }
    
      setSelectedCategorias(updatedCategorias);
      handleCategoriaChange(updatedCategorias);
    };

    return (
      <div className="categorias-container">
        <h3>Categorías</h3>
        {categorias.map((categoria) => (
          <label key={categoria}>
            {categoria}
            <input
              type="checkbox"
              name={categoria}
              checked={selectedCategorias.includes(categoria)}
              onChange={() => handleCheckboxChange(categoria)}
            />
          </label>
        ))}
      </div>
    );
  };
  
  export default CategoriasContainer;