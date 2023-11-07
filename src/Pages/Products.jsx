import { useEffect, useState } from "react";
import Ordent from "../components/Ordent";
import ProductsCard from "../components/ProductsCard";
import "../styles/products.css";
import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

function Products() {
  const [products, setProducts] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const productsPage = 8;

  const { SearchBar } = useContext(SearchContext);

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
    }, [selectedOption, SearchBar]);


  useEffect(() => {
    setCurrentPage(1);
  }, [SearchBar]);

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

  const productosFiltrados = SearchBar
  ? products.filter((p) =>
      p.title.toLowerCase().includes(SearchBar.toLowerCase())
    )
  : products;

const inicioProducto = (currentPage - 1) * productsPage;
const finProducto = inicioProducto + productsPage;

const productosMostrados = productosFiltrados.slice(inicioProducto, finProducto);

  // if(products < 5){
  //  const productosMostrados = products.slice(productosInicio, productosFinal)
  //   } else {
  //     const productosMostrados = products
  //   }
    

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
          <button className="button" onClick={() => page(currentPage - 1)}> Atrás</button>
        )}

        {currentPage < Math.ceil(products.length / productsPage) && (
          <button className="button" onClick={() => page(currentPage + 1)}>Siguiente</button>
        )}
      </div>
    </>
  );
}

export default Products;
