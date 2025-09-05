// // import React, { Fragment } from 'react'

// // const Product = (props) => {
// //   console.log(props);
  
// //   return (
// //     <div>
// //       {
// //         props.data.products.map((lio)=>{
// //           return <Fragment>
// //             <img src={lio.images[0]} alt="" />
// //           </Fragment>
// //         })
// //       }
// //     </div>
// //   )
// // }

// // export default Product


// import React from 'react';
// import { useParams } from 'react-router-dom';
// import data from './Product.json'; // import product data

// const Product = () => {
//   const { id } = useParams();

//   const product = data.products.find((p) => p.id === parseInt(id));

//   if (!product) {
//     return <h2></h2>;
//   }

//   return (
//     <div>
//       <h2>{product.title}</h2>
//       <img src={product.images[0]} alt={product.title} width="300" />
//       <p>{product.description}</p>
//       <p><b>Price:</b> ${product.price}</p>
//     </div>
//   );
// };

// export default Product;

import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from "./CartContext"
import data from './Product.json';
import './Product.css';

const Product = () => {
  const { id } = useParams();
  
  const productId = parseInt(id);

  const product = data.products.find((p) => p.id === productId);
  const similarProducts = data.products.filter(
    (p) => p.category === product?.category && p.id !== productId
  );

  const  {addToCart}  = useContext(CartContext);

  const handleAddToCart = (item) => {
    addToCart(item);
    alert(`${item.title} added to cart!`);
    

  };

  if (!product) {
    return <h2></h2>;
  }

  return (
    <div className="product-container">
      <div className="product-details">
        <h2>{product.title}</h2>
        <img src={product.images[0]} alt={product.title} />
        <p>{product.description}</p>
        <p><strong>Price:</strong> ${product.price}</p>
        <button
          onClick={() => handleAddToCart(product)}
          className="add-to-cart-btn"
        >
          Add to Cart
        </button>
      </div>

      <div className="similar-products">
        <h3>Similar Products</h3>
        <div className="similar-grid">
          {similarProducts.map((item) => (
            <div className="similar-card" key={item.id}>
              <img
                src={item.images[0]}
                alt={item.title}
                onClick={() => navigate(`/product/${item.id}`)}
                style={{ cursor: 'pointer' }}
              />
              <h4>{item.title}</h4>
              <p>${item.price}</p>
              <button
                onClick={() => handleAddToCart(item)}
                className="add-to-cart-btn"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
