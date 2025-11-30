import React , { useState, useEffect } from 'react'
import { fetchProducts } from '../api/fetchProduct.js'
import { Link } from 'react-router-dom';

const SimilarProducts = ({ productDetails, currentProductId }) => {

    const category = productDetails?.category || '';
    const [products, setProducts] = useState([]);



    useEffect(()=>{
            const getProducts = async () => {
                try {
                    const response = await fetchProducts();
                    setProducts(response.data);
                    console.log("Products fetched in ProductSection:", response);
                  
                } catch (error) {
                    console.error("Error in fetching products inside ProductSection:", error);
                }
            }
            getProducts();
        },[]);


        const similarProducts = products.filter(product => product.category === category && product._id !== currentProductId);
  

  return (
    <div>
        <div>
            <h2 className='text-2xl font-bold mb-4 mx-40'>Similar Products</h2>
            <div className=' h-full p-10 w-full flex flex-wrap justify-center items-center gap-8 rounded-3xl mb-8'>
                {similarProducts.length > 0 ? (
                    similarProducts.map((product) => (
                        <Link to={`/product/${product._id}`} key={product._id}>
                        <div className='border p-4 rounded-lg shadow-md w-60'>
                            <img src={product.imageUrl} alt={product.name} className='w-full h-40 object-cover mb-4 rounded-lg' />
                            <h3 className='text-lg font-semibold mb-2'>{product.productName}</h3>
                            <p className='text-gray-600 mb-2'>₹{product.price}</p>
                        </div>
                        </Link>
                    ))
                ) : (
                    <p className='text-gray-600'>No similar products found.</p>
                )}
            </div>
        </div>
    </div>
  )
}

export default SimilarProducts
