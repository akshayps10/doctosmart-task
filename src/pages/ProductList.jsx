import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductList.css";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("default");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const filteredProducts = products
    .filter(p =>
      p.title.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "low") return a.price - b.price;
      if (sortOrder === "high") return b.price - a.price;
      return 0;
    });

  return (
    <div className="container">

      <h1>Product List</h1>

      <input
        type="text"
        placeholder="Search products..."
        className="search"
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        className="sort"
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="default">Sort By Price</option>
        <option value="low">Low → High</option>
        <option value="high">High → Low</option>
      </select>

      <div className="grid">
        {filteredProducts.map(product => (
          <div className="card" key={product.id}>
            <img src={product.image} alt="" />
            <h3>{product.title}</h3>
            <p>₹ {product.price}</p>

            <button onClick={() => navigate(`/product/${product.id}`)}>
              View Details
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}

export default ProductList;
