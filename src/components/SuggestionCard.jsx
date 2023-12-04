import "../styles/ProductsCard.css";
import { SearchContext } from "../context/SearchContext";
import { useContext } from "react";

function SuggestionCard({ p, }) {

  const handleDelete = (e) => {
    fetch(`https://lxsgrwx2-3301.brs.devtunnels.ms/sugerencias/${p.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(response => response.json())
      .then(data => {
        console.log('Respuesta del servidor:', data);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch(error => {
        console.error('Error en la solicitud:', error);
      });
  }




  const {SearchBar}= useContext(SearchContext)
 
    if (!p.title.toLowerCase().includes(SearchBar.toLowerCase())) {
      return;
      <></>;
    } else {
      return (
        <article className="products-card">
          <h5>{p.title}</h5>
          <div className="imageContainer">
            <img src={p.image} alt={p.title} />
          </div>
          <p className="product-description">{p.description.slice(0, 45)}..</p>
          <button onClick={handleDelete} >BORRAR</button>
        </article>
      );
    }
  }
  export default SuggestionCard;