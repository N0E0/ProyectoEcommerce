import { useEffect, useState } from "react";
import Ordent from "../components/Ordent";
import ProductsCard from "../components/ProductsCard";
import Header from "../components/Header";
import "../styles/products.css"

function Products() {
  const [products, setProducts] = useState([]);
  const [SearchBar, setSearchBar] = useState("");
  const [selectedOption, setSelectedOption] = useState('');


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
  };

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(prod => {
        
        const sortedProducts = ordenarProductos(prod);
        setProducts(sortedProducts);
      });
  }, [selectedOption]);

  return (
    <>
      < Header setSearchBar={setSearchBar} />
      <div className="container">
        <Ordent selectedOption={selectedOption} handleSelectChange={handleSelectChange} />
        <main>
          {products.map((p) => (
            <ProductsCard p={p} key={p.id} SearchBar={SearchBar} />
          ))}
        </main>
      </div>
    </>
  );
}

export default Products;
