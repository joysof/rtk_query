import React from 'react'
import { useGetProductsQuery } from '../services/ProdutsApi'

const Products = () => {
 const {data : products , error , isLoading} = useGetProductsQuery()
 console.log(error)
 console.log(isLoading)
 console.log(products)
  return (
    <div>
      <h2 className='text-center mt-5 text-3xl mb-10'>List of products </h2>
      {isLoading && <h4>loading....</h4>}
      {error && <h4>{error.message}</h4>}

      
        {!isLoading && !error && products && products.length > 0 &&(
          <section className='flex flex-wrap gap-4 justify-center items-start'>
            {products.map((product , index) =>{
              return <article key={index} className='flex w-[500px] flex-col bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition-shadow duration-300'>
                <h3 className='text-xl font-semibold text-indigo-700 mb-3 border-b border-indigo-100 pb-2'>{product.title}</h3>
                <p className='text-gray-700 leading-relaxed mt-2'>{product.description}</p>

              </article>
            })}
          </section>
        ) }

    </div>
  )
}

export default Products