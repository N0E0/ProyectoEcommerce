import { useRef, useState } from "react";
import "../styles/formulario.css"

function formulario() {

  const [type, setType] = useState ("")
  const [title, setTitle] = useState ("")
  const [price, setPrice] = useState ("")
  const [description, setdescription] = useState ("")
  
  
  const cambiarType = (newType) => {
  setType (newType)
}

  return (
    <>
      <div className="container"> 
          <ul className="lu">
            <li>
           <img src='/public/logopreview.png' width={300} className="imglogo"></img>
            </li>
          <li>
            <input type="file" />
          </li>
          <li>
            <input type="text" placeholder='Categoria' />
          </li>
          <li>
            <input type="text" placeholder= 'Instrumento' />
          </li>
          <li>
            <input type="text" placeholder = 'Precio' />
          </li>
          <li>
            <input type="text" placeholder= 'Descripción de producto' />
          </li>
          <li>
            <button>Enviar</button>
          </li>
          </ul>
      </div>
   
    </>  )
}

export default formulario;