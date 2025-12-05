import React, { useState } from 'react'
import CreateNewProduct from '../../components/createNewProduct.jsx'
import UpdateExistingProduct from '../../components/updateExistingProduct.jsx'

const CreateProduct = () => {

  const [isCreating, setIsCreating] = useState(true);
  return (
    <div>
      <div className='flex gap-6 justify-center m-6 p-8 text-center  rounded-2xl'>
        <button onClick={() => setIsCreating(true)} className='text-2xl font-bold text-center underline'>Create Product</button>
        <button onClick={() => setIsCreating(false)} className='text-2xl font-bold text-center underline'>Update Product</button>
      </div>
      {/* Create new product form */}
      {isCreating ? (
        <CreateNewProduct />
      ) : (
           
              <UpdateExistingProduct />
      )} 
    </div>  
  )
}

export default CreateProduct



