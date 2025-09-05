
import React from "react";
import { useNavigate } from "react-router-dom";
import data from "./Product.json";
import "./Product.css";

const ProductList = () => {
  const navigate = useNavigate();

  return (
    <div className="product-list">
      
      <div className="product-gallery">
        {data.products.map((item) => (
          <div key={item.id} className="product-card">
            <img
              src={item.images[0]}
              alt={item.title}
              onClick={() => navigate(`/product/${item.id}`)}
              className="product-image"
            />
            <h4>{item.title}</h4>
            <p>${Number(item.price).toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;