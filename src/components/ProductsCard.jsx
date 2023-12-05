import "../styles/ProductsCard.css";
import { SearchContext } from "../context/SearchContext";
import { useContext } from "react";

function Products({ p, }) {
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
          <p className="price">${p.price}</p>
          <p className="product-description">{p.description.slice(0, 45)}..</p>
        </article>
      );
    }
  }
  export default Products;