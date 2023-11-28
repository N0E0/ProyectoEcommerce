import React from 'react'

const Orden = ({selectedOption, handleSelectChange}) => {
    
    return (
        <div className="orden-container">
        <label htmlFor="orden">Ordenar por
        <select value={selectedOption} onChange={handleSelectChange} name="" id="orden"> 
      
        <option value="" name="" id=""> Mas relevante </option>
        <option value="a" name="" id=""> A - Z</option>
        <option value="z" name="" id=""> Z - A </option>
        
        </select>
        </label>
        </div>
        )
}
export default Orden;