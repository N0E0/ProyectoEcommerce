import { useEffect, useState } from "react";
import Ordent from "../components/Ordent";
import ProductsCard from "../components/ProductsCard";
import "../styles/products.css";


function Products() {
  const [products, setProducts] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const productsPage = 8;

  const page = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((prod) => {
        const sortedProducts = ordenarProductos(prod);
        setProducts(sortedProducts);
      });
  }, [selectedOption]);

  const ordenarProductos = (prod) => {
    const sortedProducts = selectedOption === 'min'
      ? [...prod].sort((a, b) => a.price - b.price)
      : selectedOption === 'max'
      ? [...prod].sort((a, b) => b.price - a.price)
      : [...prod];

    return sortedProducts;
  };

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    setCurrentPage(1);
  };

  const productosInicio = (currentPage - 1) * productsPage;
  const productosFinal = productosInicio + productsPage;

  const productosMostrados = products.slice(productosInicio, productosFinal);

  return (
    <>
      <div className="container">
        <Ordent selectedOption={selectedOption} handleSelectChange={handleSelectChange} />
        <main>
          {productosMostrados.map((p) => (
            <ProductsCard p={p} key={p.id} />
          ))}
        </main>
      </div>

      <div className="botones">
        {currentPage > 1 && (
          <button onClick={() => page(currentPage - 1)}> Atrás</button>
        )}

        {currentPage < Math.ceil(products.length / productsPage) && (
          <button onClick={() => page(currentPage + 1)}>Siguiente</button>
        )}
      </div>
    </>
  );
}

export default Products;
