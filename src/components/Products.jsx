import React from 'react'
import { useDeleteProductMutation, useGetProductsQuery } from '../services/ProdutsApi'

const Products = () => {
 const {data : products , error , isLoading} = useGetProductsQuery()
const [deleteProduct] = useDeleteProductMutation()


 const handleDelete =async (id) =>{
 await  deleteProduct(id)
}
  return (
    <div>
      <h2 className='text-center mt-5 text-3xl mb-10'>List of products </h2>
      {isLoading && <h4>loading....</h4>}
      {error && <h4>{error.message}</h4>}

      
        {!isLoading && !error && products && products.length > 0 &&(
          <section className='flex flex-wrap gap-4 justify-center items-start'>
            {products.map((product , index) =>{
              return <article key={index} className='flex w-[500px] justify-center flex-col bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition-shadow duration-300'>
                <h3 className='text-xl font-semibold text-indigo-700 mb-3 border-b border-indigo-100 pb-2'>{product.title}</h3>
                <h2>{product.price}</h2>
                <p className='text-gray-700 leading-relaxed mt-2'>{product.description}</p>
                <button className='bg-red-200 py-2 my-2 rounded-2xl cursor-pointer text-center' onClick={() => handleDelete(product.id)}>Delete</button>
              </article>
            })}
          </section>
        ) }

    </div>
  )
}

export default Products