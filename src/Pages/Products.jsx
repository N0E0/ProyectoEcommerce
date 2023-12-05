import { useEffect, useState } from "react";
import Ordent from "../components/Ordent";
import ProductsCard from "../components/ProductsCard";
import "../styles/products.css";
import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import CategoriasContainer from "../components/categorias";

function Products() {
  const [products, setProducts] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPage = 8;
  const { SearchBar } = useContext(SearchContext);


////////////////////////////////////////////////////LO QUE AGREGUE
const [selectedCategorias, setSelectedCategorias] = useState([]);



const getAllDistributions = async (url) => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Network response was not ok: ${res.status}`);
    }

    const prod = await res.json();
    const sortedProducts = ordenarProductos(prod);
    setProducts(sortedProducts);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

useEffect(() => {
  const fetchProductos = async () => {
    try {
      const url = `http://localhost:3301/Instrumentos${
        selectedCategorias.length > 0 ? `?categorias=${selectedCategorias.join('&categorias=')}` : ''
      }`;

      await getAllDistributions(url);
    } catch (error) {
      console.error('Error fetching productos:', error);
    }
  };

  fetchProductos();
}, [selectedOption, SearchBar, selectedCategorias, currentPage]);


const handleCategoriaChange = (updatedCategorias) => {
  setSelectedCategorias(updatedCategorias);
};

////////////////////////////////////////////////////////// LO QUE AGREGUE
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

  return (
    <>
      <div className="container">
        <Ordent selectedOption={selectedOption} handleSelectChange={handleSelectChange} />
        <CategoriasContainer handleCategoriaChange={handleCategoriaChange} />

        <main>
          {productosMostrados.map((p, index) => (
            <ProductsCard p={p} key={index} />
          ))}
        </main>
      </div>

      <div className="botones">
        {currentPage > 1 && (
          <button className="button" onClick={() => setCurrentPage(currentPage - 1)}> Atrás</button>
        )}

        {currentPage < Math.ceil(products.length / productsPage) && (
          <button className="button" onClick={() => setCurrentPage(currentPage + 1)}>Siguiente</button>
        )}
      </div>
    </>
  );
}

export default Products;