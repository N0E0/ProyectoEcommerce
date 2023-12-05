import { useState, useContext } from "react";
import { SearchContext } from "../context/SearchContext";

function SuggestionCard({ p }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({
    title: p.title,
    description: p.description,
    image: p.image
  });

  const { SearchBar } = useContext(SearchContext);

  const handleDelete = () => {
    fetch(`http://localhost:3301/sugerencias/${p.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log('Respuesta del servidor:', data);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch(error => {
        console.error('Error en la solicitud:', error);
      });
  };

  const handleUpdate = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    fetch(`http://localhost:3301/sugerencias/${p.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedData),
    })
      .then((res) => res.json())
      .then(data => {
        console.log('Respuesta del servidor:', data);
        setTimeout(2500, window.location.reload() )
      })
      .catch(error => {
        console.error('Error en la solicitud:', error);
      });

    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  if (!p.title.toLowerCase().includes(SearchBar.toLowerCase())) {
    return null;
  } else {
    return (
      <article className="products-card">
        {isEditing ? (
          <>
          <label htmlFor="SuginputName">Titulo</label>
            <input type="text" id="SuginputName" name="title" value={editedData.title} onChange={handleInputChange} />
          <label htmlFor="SuginputDesc">Descripcion</label>
            <input type="text" id="SuginputDesc" name="description" value={editedData.description} onChange={handleInputChange} />
          <label htmlFor="SuginputImage">Imagen URL</label>
            <input type="text" id="SuginputImage" name="image" value={editedData.image} onChange={handleInputChange} />
            <button onClick={handleSave}>Guardar</button>
            <button onClick={handleCancel}>Cancelar</button>
          </>
        ) : (
          <>
          <article className="products-card">
            <h5>{p.title}</h5>
            <div className="imageContainer">
              <img src={p.image} alt={p.title} />
            </div>
            <p className="product-description">{p.description.slice(0, 45)}..</p>
            <button onClick={handleDelete}>BORRAR</button>
            <button onClick={handleUpdate}>Editar</button>
          </article>
          </>
        )}
      </article>
    );
  }
}

export default SuggestionCard;
