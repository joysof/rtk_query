
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const ProductsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (builder) => ({
    // query use onley red data 
    getProducts : builder.query({
        query : () => 'products'
    })
  }),
})

// auto create this hook 

// useGetProductsQuery 

export const  {useGetProductsQuery} = ProductsApi