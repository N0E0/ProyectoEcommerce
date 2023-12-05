import React from 'react';
import "../styles/ordent.css"

const Ordent = ({ selectedOption, handleSelectChange }) => {
  return (
    <div className="ordent-container">
      <label className='ordent-l' htmlFor="ordent">
        Ordenar por
        <select
          value={selectedOption}
          onChange={handleSelectChange}
          name="ordent"
          id="ordent"
          className="select-box"
        >
          <option className='option-min-max' value="relevante">Mas relevante</option>
          <option className='option-min-max' value="min">Menor precio</option>
          <option className='option-min-max' value="max">Mayor precio</option>
        </select>
      </label>
    </div>
  );
};

export default Ordent;
