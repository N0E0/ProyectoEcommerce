import React from 'react'

const Ordent = ({selectedOption, handleSelectChange}) => {
    
    return (
        <>
        <label htmlFor="ordent">Ordenar por
        <select value={selectedOption} onChange={handleSelectChange} name="" id="ordent"> 
      
        <option value="" name="" id=""> Mas relevante </option>
        <option value="min" name="" id=""> Menor precio </option>
        <option value="max" name="" id=""> Mayor precio </option>
        
        </select>
        </label>
        </>
        )
}
export default Ordent;