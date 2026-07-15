import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../../features/products/productsSlice';

const Products = () => {
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
                <div key={product._id} className="product-card">
                    <Link to={`/product/${product._id}`}>
                        <h2>{product.name}</h2>
                        <p>Price: ₹{product.price}</p>
                        <p>Category: {product.category}</p>
                        <p>Status: {product.status}</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Products