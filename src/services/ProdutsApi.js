import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const ProductsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3003/' }),
  endpoints: (builder) => ({
    // query use onley red data
    getProducts: builder.query({
      query: () => 'products',
    }),
    deleteProduct : builder.mutation({
      query : (id) => ({
        url : `products/${id}`,
        method : 'DELETE'
      })
    })
  }),
})

// auto create this hook

// useGetProductsQuery

export const { useGetProductsQuery , useDeleteProductMutation } = ProductsApi
