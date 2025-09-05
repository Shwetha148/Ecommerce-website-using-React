// import React, { useContext } from 'react';
// import { CartContext } from './CartContext';
// import "./Cart.css"

// const CartPage = () => {
//   const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

//   const handleQuantityChange = (id, e) => {
//     const qty = parseInt(e.target.value);
//     updateQuantity(id, qty);
//   };

//   if (cart.length === 0) {
//     return <h2>Your cart is empty.</h2>;
//   }

//   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <div  className='cart-items' style={{ padding: '20px' }}>
//       <h2>Your Cart</h2>
//       <ul>
//         {cart.map((item) => (
//           <li key={item.id} style={{ marginBottom: '20px' }}>
//             <h4>{item.title}</h4>
//             <img src={item.images[0]} alt={item.title} width="100" />
//             <p>Price: ${item.price}</p>
//             <input
//               type="number"
//               min="1"
//               value={item.quantity}
//               onChange={(e) => handleQuantityChange(item.id, e)}
//             />
//             <button onClick={() => removeFromCart(item.id)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//       <h3>Total: ${total.toFixed(2)}</h3>
//     </div>
//   );
// };

// export default CartPage;


import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import "./Cart.css";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const handleQuantityChange = (id, e) => {
    const qty = parseInt(e.target.value);
    if (!isNaN(qty) && qty > 0) {
      updateQuantity(id, qty);
    }
  };

  if (cart.length === 0) {
    return <h2 className="empty-cart">Your cart is empty.</h2>;
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>
      <ul className="cart-list">
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <img
              src={item.images?.[0] || "https://via.placeholder.com/100"}
              alt={item.title}
              className="cart-item-image"
            />
            <div className="cart-item-details">
              <h4>{item.title}</h4>
              <p className="cart-item-price">${item.price}</p>
              <div className="cart-item-quantity">
                <label>Qty: </label>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, e)}
                />
              </div>
              <button
                className="cart-item-remove"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <h3>Total: ${total.toFixed(2)}</h3>
        <button className="checkout-btn">Proceed to Checkout</button>
        <button>Pay</button>
      </div>
    </div>
  );
};

export default CartPage;
