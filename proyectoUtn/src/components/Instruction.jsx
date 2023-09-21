import "../styles/instruction.css"

const Instruction = () => {
  return (
    <div className='instruction-container'>
        <div className="instruction">
            <h1>🏪</h1>
            <h3>Elegí los productos que vas a comprar</h3>
            <p>Si querés más de uno, sumalos a tu carrito.</p>
        </div>
            <hr width="1" size="180"/>
        <div className="instruction">
            <h1>💳💵</h1>
            <h3>Pagá con el medio de pago que quieras</h3>
            <p>Compra con seguridad.</p> 
        </div>
            <hr width="1" size="180"/>
        <div className="instruction">
            <h1>📦</h1>
            <h3>Elegí la forma de entrega que quieras ¡y listo!</h3>
            <p>Podes recibir o retirar el producto que compraste.</p>
        </div>
    
    </div>
  )
}

export default Instruction