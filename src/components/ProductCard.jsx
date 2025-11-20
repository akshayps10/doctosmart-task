import React from "react";
import "./ProductCard.css";

function ProductCard() {
  return (
    <div className="card">
      <h2 className="card-title">Product Name</h2>
      <p className="card-price">Price: ₹999</p>
      <p className="card-desc">This is a simple test product description.</p>

      <button className="details-btn">View Details</button>
    </div>
  );
}

export default ProductCard;
