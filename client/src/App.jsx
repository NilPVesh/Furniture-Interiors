import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  },[]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/products`);
      setProducts(response.data);
    } catch (err) {
      console.error('Error fetching products:', err);
    }
  };

  return (
    <div className="products-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <h2>{product.name}</h2>
          <p>Price: ₹{product.price}</p>
          <p>Category: {product.category}</p>
          <p>Status: {product.status}</p>
        </div>
      ))}
    </div>
  );
};

export default App