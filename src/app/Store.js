import { configureStore } from "@reduxjs/toolkit";
import productsSlice from '../features/products/Products.js'
const store = configureStore({
    reducer :{
        productsR : productsSlice
    }
})

export default store