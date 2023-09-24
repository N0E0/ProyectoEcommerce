import "../styles/ProductsCard.css";

function Products({ p, SearchBar }) {
    if (!p.title.toLowerCase().includes(SearchBar.toLowerCase())) {
      return;
      <></>;
    } else {
      return (
        <article>
          <h5>{p.title}</h5>
          <div className="imageContainer">
            <img src={p.image} alt={p.title} />
          </div>
          <p>${p.price}</p>
          <p className="product-description">{p.description.slice(0, 45)}..</p>
        </article>
      );
    }
  }
  export default Products;