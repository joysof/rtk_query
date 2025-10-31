import { configureStore } from "@reduxjs/toolkit";
import productsSlice from '../features/products/Products.js'
import { setupListeners } from '@reduxjs/toolkit/query'
import { ProductsApi } from "../services/ProdutsApi.js";
const store = configureStore({
    reducer :{
         [ProductsApi.reducerPath]: ProductsApi.reducer,
        productsR : productsSlice
    },
     middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ProductsApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
// setupListeners(store.dispatch)

export default store