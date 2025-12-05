import React from 'react'

const CreateNewProduct = () => {
  return (
    <div>
          <h1 className='text-3xl font-bold text-center mt-10'>Create New Product</h1>
          <div className='max-w-3xl mx-auto mt-8 p-6 bg-white rounded-2xl shadow-lg'>
            <form>
              <div className='mb-4'>
                <label className='block text-gray-700 font-semibold mb-2'>Product Name</label>
                <input type="text" className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400' placeholder='Enter product name' />
              </div>
              <div className='mb-4'>
                <label className='block text-gray-700 font-semibold mb-2'>Description</label>
                <textarea className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400' placeholder='Enter product description'></textarea>
              </div>
              <div className='mb-4'>
                <label className='block text-gray-700 font-semibold mb-2'>Price</label>
                <input type="number" className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400' placeholder='Enter product price' />
              </div>
              <div className='mb-4'>
                <label className='block text-gray-700 font-semibold mb-2'>Category</label>
                <input type="text" className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400' placeholder='Enter product category' />
              </div>
              <div className='mb-4'>
                <label className='block text-gray-700 font-semibold mb-2'>Stock Quantity</label>
                <input type="number" className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400' placeholder='Enter stock quantity' />
              </div>
              <div className='mb-6'>
                <label className='block text-gray-700 font-semibold mb-2'>Image URL</label>
                <input type="text" className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400' placeholder='Enter image URL' />
              </div>
              <button type="submit" className='w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition-colors'>
                Create Product
              </button>
            </form>
          </div>
        </div>
  )
}

export default CreateNewProduct