import { useState } from "react";

export const Checkout = ({ products }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email1, setEmail1] = useState('');
    const [email2, setEmail2] = useState('');
    const [emailError, setEmailError] = useState(false)
    
    const calculateTotal = () => {
      let total = 0;
      products.forEach((product) => {
        total += product.price * product.quantity;
      });
      return total;
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if(email1.trim() !== email2.trim()) setEmailError(true)
      console.log('Form information submitted:', {
        firstName,
        lastName,
        phone,
        email1,
        email2
      });
    };
  
    return (
      <div className="checkout-container">
        <h2>Checkout</h2>
        <div className="products-container">
          <h3>Productos En Carrito</h3>
          <ul className="products-list-checkout">
            {products.map((product, index) => (
              <li key={index} className="product-checkout">
                <p>{product.name} - Cantidad: {product.quantity}</p>
              </li>
            ))}
          </ul>
          <p className="total-order">Total de la orden: ${calculateTotal()}</p>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="firstName">Nombre:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <label htmlFor="lastName">Apellido:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <label htmlFor="phone">Teléfono:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <label htmlFor="email1">Email:</label>
          <input
            type="email"
            id="email1"
            value={email1}
            onChange={(e) => setEmail1(e.target.value)}
            required
          />
          <label htmlFor="email2">Confirmar Email:</label>
          <input
            type="email"
            id="email2"
            value={email2}
            onChange={(e) => setEmail2(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
          {emailError && <p className="email-error">Los emails no coinciden</p>}
        </form>
      </div>
    );
  };