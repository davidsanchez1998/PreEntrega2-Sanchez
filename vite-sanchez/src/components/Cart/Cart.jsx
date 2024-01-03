import { Link } from "react-router-dom"

export const Cart = ({productsInCart, deleteProductFromCart}) => {
    return (
        <div className="cart-container">
        <h2>Carrito de Compras</h2>
        <ul className="products-list">
          {productsInCart.map((product, index) => (
            <li key={index} className="product">
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>Precio: ${product.price}</p>
                <p>Cantidad: {product.quantity}</p> 
                <button onClick={() => deleteProductFromCart(product.id)} className="btn btn-info mx-2">Eliminar</button>
              </div>
            </li>
          ))}
        </ul>
        {productsInCart.length > 0 && (<div>
          <Link to="/checkout">
          <h3>Ir al Checkout</h3>
          </Link>
        </div>)}
      </div>
    )
}