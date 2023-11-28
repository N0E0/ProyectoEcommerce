import { useEffect, useState } from "react";
import Orden from "../components/Orden";
import "../styles/products.css";
import SuggestionCard from "../components/SuggestionCard";

const Suggestions = () => {
  const [products, setProducts] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const productsPage = 8;

const getAllSuggestions = async () => {
try {
    const response = await fetch("http://localhost:3301/sugerencias");
    if (!response.ok) {
    throw new Error('Error al obtener datos del servidor');
    }
    const data = await response.json();
    const sortedProducts = ordenarSuggestions(data);
    setProducts(sortedProducts);
} catch (error) {
    console.error(error);
}
};

  useEffect(() => {
    getAllSuggestions();
  }, [selectedOption, currentPage]);
  
const ordenarSuggestions = (prod) => {
const sortedProducts =
selectedOption === 'a'
? [...prod].sort((a, b) => a.title.localeCompare(b.title))
: selectedOption === 'z'
? [...prod].sort((a, b) => b.title.localeCompare(a.title))
: [...prod];

return sortedProducts;
};

const handleSelectChange = (event) => {
const value = event.target.value;
setSelectedOption(value);
setCurrentPage(1);
};

  const inicioProducto = (currentPage - 1) * productsPage;
  const finProducto = inicioProducto + productsPage;
  const productosMostrados = products.slice(inicioProducto, finProducto);

  return (
    <>
      <div className="container">
        <Orden selectedOption={selectedOption} handleSelectChange={handleSelectChange} />
        <main>
          {productosMostrados.map((p) => (
            <SuggestionCard p={p} key={p.id} />
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
};

export default Suggestions;
