import miimg from "../../public/carrito-de-compras.png"
import "../styles/carrito.css"


function Carrito() {
    return(
        <>
        <img src={miimg} alt="carrito" className="imgCarrito" />
        <p>🛒</p>
        <p>hola que hace</p>
        </>
    )
    
}
export default Carrito