import { configureStore } from '@reduxjs/toolkit';
import productReducer from "../features/products/productsSlice";
import productDetailsReducer from "../features/products/productDetailsSlice";
import authSliceReducer from "../features/auth/authSlice";

export const store = configureStore({
    reducer: {
        products: productReducer,
        productDetails: productDetailsReducer,
        auth: authSliceReducer
    }
});