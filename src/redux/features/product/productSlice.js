// selectedProductsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        selectedProduct: null,
    },
    reducers: {
        addSelectedProduct(state, action) {
            const { category, product } = action.payload;
            state.products.push({product, category});

        },
        removeSelectedProduct(state, action) {
            const { category } = action.payload;
            delete state[category];
        },
    },
});

export const { addSelectedProduct, removeSelectedProduct } = productsSlice.actions;

export default productsSlice.reducer;
