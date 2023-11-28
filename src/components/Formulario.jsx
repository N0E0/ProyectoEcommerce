import { useState } from "react";
import "../styles/formulario.css";
import logoPreview from "/logopreview.png";

function Formulario() {
  const [form, setForm] = useState({
    title: '',
    description: '',
    image: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3301/sugerencias', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Respuesta del servidor:', data);
        // Hacer algo con la respuesta del servidor si es necesario
      })
      .catch(error => {
        console.error('Error en la solicitud:', error);
        // Manejar errores aquí
      });
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
    <div className="centerForm">
      <form className="suggestionForm" action="" onSubmit={handleSubmit}>
        <fieldset className="suggestionFieldset">
          <img className="imglogo" src={logoPreview} alt="" />
          <input type="text" placeholder='Instrumento' value={form.title} name="title" onChange={handleChange} />
          <input type="text" placeholder='Descripción del instrumento' value={form.description} name="description" onChange={handleChange} />
          <input type="text" placeholder='Imagen' value={form.image} name="image" onChange={handleChange} />
        </fieldset>
        <button type="submit">Enviar!</button>
      </form>
    </div>
    </>
  );
}

export default Formulario;
