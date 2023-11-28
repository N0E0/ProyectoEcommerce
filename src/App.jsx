import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Carrito from "./components/Carrito";
import UserLogin from "./components/UserLogin"
import Products from "./Pages/Products.jsx";
import Navbar from "./components/Navbar";
import Header from "./components/Header"
import Instruction from "./components/Instruction";
import Promociones from "./components/Promociones";
import MediosdePago from "./components/MediosdePagos";
import Footer from "./components/Footer";
import "./App.css"
import { SearchContextProvider } from "./context/SearchContext";
import Newproduct from "./Pages/Newproduct.jsx";
import Suggestions from "./Pages/Suggestions.jsx";
function App() {
  return (
    <SearchContextProvider>

       <BrowserRouter>
 

      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      <Route path="/carrito" element={<Carrito/>}/>
      <Route path="/user-login" element={<UserLogin/>}/>
      <Route path="/productos" element={<Products/>}/>
       <Route path="/sugerencias" element={<Suggestions/>}/>
        <Route path="/medios-de-pago" element={<MediosdePago/>}/>
        <Route path="/promociones" element={<Promociones/>}/>
        <Route path="/Newproduct" element={<Newproduct/>}/>
        <Route path='*' element={<h3>Ruta inexistente</h3>}/>

      </Routes>
      <Instruction/>
      <Footer/>
      
      
    </BrowserRouter>
    </SearchContextProvider>

  )
}

export default App

