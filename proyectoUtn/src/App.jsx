import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Carrito from "./components/Carrito";
import UserLogin from "./components/UserLogin"
import Contact from "./Pages/Contact.jsx";
import Products from "./Pages/Products.jsx";
import Navbar from "./components/Navbar";
import Header from "./components/Header"
import Instruction from "./components/Instruction";
import Promociones from "./components/Promociones";
import MediosdePago from "./components/MediosdePagos";
import Footer from "./components/Footer";
import "./App.css"
import { SearchContextProvider } from "./context/SearchContext";
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
       <Route path="/contacto" element={<Contact/>}/>
        <Route path="/medios-de-pago" element={<MediosdePago/>}/>
        <Route path="/promociones" element={<Promociones/>}/>
        <Route path='*' element={<h3>Ruta inexistente</h3>}/>

      </Routes>
      <Instruction/>
      <Footer/>
      
      
    </BrowserRouter>
    </SearchContextProvider>

  )
}

export default App

