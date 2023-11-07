import "../styles/footer.css"
import { Link } from "react-router-dom"

function Footer () {
    return (
        <div className='footer-container'>


            <div className="footer">

                <div className="footer-info">
                    <h2>Compra online</h2>
                    <p>Mis pedidos</p>
                    <Link to={"/carrito"}className="link">Mi carrito</Link>
                    <p>Costo de envío</p>
                </div>
                <div className="footer-info">
                    <h2>Atención al Cliente</h2>
                    <p>Preguntas frecuentes</p>
                    <p>Términos y condiciones</p>
                    <p>Botón de arrepentimiento</p>
                </div>
                <div className="footer-info">
                    <h2>Contacto</h2>
                    <p>0810-444-6363</p>
                    <p>Ginoga@correo.com</p>
                    <p>Buenos Aires, Argentina</p>
                </div>
            </div>

        </div>
      )
    }

export default Footer


/*import "../styles/footer.css"
import { Link } from "react-router-dom"

import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';



function Footer () {
    return (
        <div className='footer-container'>
            <div className="footer">

              <div className="footer-1">
                    <div className="footer-redes">
                        <a href="https://www.facebook.com/tupagina" target="_blank" className="icono" >
                            <FaFacebook size={40} />
                        </a>
                        <a href="https://twitter.com/tupagina" target="_blank" className="icono">
                            <FaTwitter size={40} />
                        </a>
                        <a href="https://www.instagram.com/tupagina" target="_blank" className="icono">
                            <FaInstagram size={40} />
                        </a>
                    </div>
                </div>
    
                <div>
                    <div className="footer-info">
                        <h2>Compra online</h2>
                        <p>Mis pedidos</p>
                        <Link to={"/carrito"}className="link">Mi carrito</Link>
                        <p>Costo de envío</p>
                    </div>
                    <div className="footer-info">
                        <h2>Atención al Cliente</h2>
                        <p>Preguntas frecuentes</p>
                        <p>Términos y condiciones</p>
                        <p>Botón de arrepentimiento</p>
                    </div>
                    <div className="footer-info">
                        <h2>Contacto</h2>
                        <p>0810-444-6363</p>
                        <p>Ginoga@correo.com</p>
                        <p>Buenos Aires, Argentina</p>
                    </div>
            </div>
         </div>
        </div>
      )
    }

export default Footer;
*/