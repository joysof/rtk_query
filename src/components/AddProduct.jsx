import React, { useState } from 'react'
import { useAddProductMutation } from '../services/ProdutsApi'

const AddProduct = () => {
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    price: '',
    description: '',
  })

  const [addProduct] = useAddProductMutation()


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }


  const handleSubmit = async (e) => {
    e.preventDefault()

    const newProduct = {
      id: formData.id,
      title: formData.title,
      price: parseFloat(formData.price),
      description: formData.description,
    }
   try {
    await addProduct(newProduct)
   } catch (error) {
    console.log(error)
   }

  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 border rounded-lg shadow-lg space-y-3"
    >
      <h2 className="text-xl font-bold mb-2 text-center text-indigo-600">
        Add New Product
      </h2>

      <input
        name="id"
        value={formData.id}
        onChange={handleChange}
        placeholder="Product ID"
        className="w-full border p-2 rounded"
      />
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        className="w-full border p-2 rounded"
      />
      <input
        name="price"
        value={formData.price}
        onChange={handleChange}
        placeholder="Price"
        type="number"
        className="w-full border p-2 rounded"
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full border p-2 rounded"
      />

      <button
        type="submit"
        className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 w-full"
      >
        ADD
      </button>
    </form>
  )
}

export default AddProduct
