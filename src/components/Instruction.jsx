import "../styles/instruction.css"

const Instruction = () => {
  return (
    <div className='instruction-container'>
        <div className="instruction">
            <h2>🏪</h2>
            <h4>Elegí los productos que vas a comprar</h4>
            <p>Si querés más de uno, sumalos a tu carrito.</p>
        </div>
            <hr width="1" size="210"/>
        <div className="instruction">
            <h2>💳💵</h2>
            <h4>Pagá con el medio de pago que quieras</h4>
            <p>Compra con seguridad.</p> 
        </div>
            <hr width="1" size="210"/>
        <div className="instruction">
            <h2>📦</h2>
            <h4>Elegí la forma de entrega que quieras ¡y listo!</h4>
            <p>Podes recibir o retirar el producto que compraste.</p>
        </div>
    
    </div>
  )
}

export default Instruction