import React from 'react'
import "../styles/ordent.css"

const Orden = ({selectedOption, handleSelectChange}) => {
    
    return (
        <div className="ordent-container">
        <label  className='ordent-l' htmlFor="orden">Ordenar por
        <select  className="select-box" value={selectedOption} onChange={handleSelectChange} name="" id="orden"> 
      
        <option className='option-min-max' value="" name="" id=""> Mas relevante </option>
        <option className='option-min-max' value="a" name="" id=""> A - Z</option>
        <option className='option-min-max' value="z" name="" id=""> Z - A </option>
        
        </select>
        </label>
        </div>
        )
}
export default Orden;