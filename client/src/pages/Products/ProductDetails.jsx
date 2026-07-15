import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDetails } from '../../features/products/productDetailsSlice';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const dispatch = useDispatch();
    const { productId } = useParams();
    const { productDetails } = useSelector((state) => state.productDetails);

    const { name } = productDetails?.data || {}; // Destructure the product details if available
    useEffect(() => {
        dispatch(fetchProductDetails(productId));
    }, [productId]);
    return (
        <div>
            {name}
        </div>

    )
}

export default ProductDetails