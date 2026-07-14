import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './features/products/productsSlice';

const App = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="products-container">
      <h1>VF Interiors</h1>
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