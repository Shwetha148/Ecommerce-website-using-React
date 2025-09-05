// import React from 'react'
// import image from "../Images/Product.jpg"
// import { useNavigate } from 'react-router-dom';

// const Home = () => {

//   const navigate = useNavigate();

//   const handleImageClick = (image) => {
//     navigate('/product');
//   };

//   return (
//     <div>
//       <h1>Welcome to FashionWebiste</h1>
//             <p>Your one-stop shop for everything!</p>
//             <img src={image} alt=""  height="500px" width="100%" onClick={handleImageClick}/>
//     </div>
//   )
// }

// export default Home


// import React from 'react';
// import { Link, Outlet, useNavigate } from 'react-router-dom';
// import data from './Product.json'; // assuming local JSON
// import "./Nav.css"
// import logo from "../Myweb/logo.jpg"
// import { GiHamburgerMenu } from "react-icons/gi";
// import home from "../Myweb/home.jpg"


// const Home = () => {
//   const navigate = useNavigate();

//   const handleImageClick = (id) => {
//     navigate(`/product/${id}`);
//   };

//   const handleAddToCart = (product) => {
//     setCart((prevCart) => [...prevCart, product]);
//     console.log("Cart:", cart); // Optional: for debugging
//   };

//   return (
//     <div>
//       <nav className="navbar">
//         <img src={logo} alt='' id='logo'/>
//       <div id='navlist'>
//         <Link to="/"></Link>
//         <Link to="/home">Home</Link>
//         <Link to="/product">Products</Link>
//         <Link to="/cart">Cart</Link>
//       </div>
//       <h2 id='amberger'><GiHamburgerMenu /></h2>
//     </nav>
//     <Outlet></Outlet>
//     <img src={home} alt='' id='hero-image' />
      
//       <div className="product-gallery">
//   {data.products.map((item) => (
//     <div key={item.id} className="product-card">
//       <img
//         src={item.images[0]}
//         alt={item.title}
//         onClick={() => handleImageClick(item.id)}
//         className="product-image"
//       />
//       <h4>{item.title}</h4>
//       <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
//     </div>
//   ))}
// </div>


//     </div>
//   );
// };

// export default Home;


import React, { useContext } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext'; // Import context
import data from './Product.json';
import './Nav.css';
import logo from '../Myweb/logo1.jpg';
import { GiHamburgerMenu } from 'react-icons/gi';
import home from '../Myweb/home1.jpg';

const Home = () => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext); // Use context

  const handleImageClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div>
      <nav className="navbar">
        <img src={logo} alt='Logo' id='logo'/>
        <div id='navlist'>
          <Link to="/home" style={{textDecoration:'none'}}>Home</Link>
          <Link to="/product" style={{textDecoration:'none'}}>Products</Link>
          <Link to="/cart" style={{textDecoration:'none'}}>Cart</Link>
        </div>
        <h2 id='amberger'><GiHamburgerMenu /></h2>
      </nav>
      <Outlet />
      <img src={home} alt='Hero' height={400} width={1000} />

      <div className="product-gallery">
        {data.products.map((item) => (
          <div key={item.id} className="product-card">
            <img
              src={item.images[0]}
              alt={item.title}
              onClick={() => handleImageClick(item.id)}
              className="product-image"
            />
            <h4>{item.title}</h4>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
