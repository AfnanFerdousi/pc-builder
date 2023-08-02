import { configureStore } from '@reduxjs/toolkit';
import { api } from './api/apiSlice';
import  productReducer  from './features/product/productSlice';

const store = configureStore({
    reducer: {
        product: productReducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

export const RootState = store.getState();
export const AppDispatch = store.dispatch;
export default store;


