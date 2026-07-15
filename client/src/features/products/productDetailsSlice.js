import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProductDetails } from "./productAPI";

export const fetchProductDetails = createAsyncThunk('products/fetchProductDetails', async (id) => {
    return await getProductDetails(id);
});

const initialState = {
    productDetails: null,
    loading: false,
    error: null
};

const productDetailsSlice = createSlice({
    name: 'productDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductDetails.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProductDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.productDetails = action.payload;
            })
            .addCase(fetchProductDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default productDetailsSlice.reducer;