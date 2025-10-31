import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const ProductsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3003/' }),
  tagTypes : ["product"],
  endpoints: (builder) => ({
    // query use onley red data
    getProducts: builder.query({
      query: () => 'products',
      providesTags: (result) =>
  result
    ? [...result.map(({ id }) => ({ type: 'Product', id })),
        { type: 'Product', id: 'LIST' },
      ]
    : [{ type: 'Product', id: 'LIST' }],
  }),
    deleteProduct : builder.mutation({
      query : (id) => ({
        url : `products/${id}`,
        method : 'DELETE'
      }),
      invalidatesTags : (results , error , id) => [{type : 'Product' , id}]
    }),
    addProduct : builder.mutation({
      query : (body) => ({
        url : `products/`,
        method : 'POST',
        body
      }),
      invalidatesTags : [{type : 'Product' , id : 'LIST'}]
    })
  }),
})

// auto create this hook

// useGetProductsQuery

export const { useGetProductsQuery , useDeleteProductMutation , useAddProductMutation} = ProductsApi
