import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import ecomContext from '../context/context'

const AddtoCart = () => {
  const { cartItems, removeFromCart } = useContext(ecomContext)

  return (
    <>
    <div className="m-12">
        <div className="text-sm mb-4">
            <Link to="/" className='opacity-50 hover:opacity-100'>Home</Link><span>/</span><a href="">Add-to-Cart</a>
        </div>
    </div>
    <div className="m-10 ">
        <h1 className="text-6xl text-center mb-12">Add to Cart</h1>

        {cartItems.length === 0
            ?
            <div className="text-center my-32 text-2xl">
                No Product in Cart
            </div>
            :
            cartItems.map((items) => (
                <div className='w-full sm:w-10/12 m-auto' key={items.id}>
                    <div className="flex flex-col sm:flex-row gap-4 border-b border-black p-5 items-center justify-center">

                        <div className="mb-4 sm:mb-0 w-full sm:w-48 max-w-xs">
                            <img src={items.image} alt="" className="h-auto w-full" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h1 className='text-xs font-bold mb-1 text-center sm:text-left'>Brand Name</h1>
                            <p className='text-md opacity-50 font-light mb-2 text-center sm:text-left'>{items.title}</p>
                            <div className="flex mb-1 justify-center sm:justify-start">
                                <h1 className='text-md font-bold text-green-800'>₹ {items.price}</h1>
                                <h1 className="ml-3 line-through text-red-700 opacity-50">₹ 2299</h1>
                            </div>
                            <p className='font-light text-sm mb-5 text-center sm:text-left text-green-700'>return policy is available</p>
                            <div className='border-black border w-fit mb-5 items-center flex gap-3 rounded-md mx-auto sm:mx-0'>
                                <input type="number" placeholder='Quantity' min={1} className='w-28 px-1 py-1 border-1 border-black rounded' />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center sm:items-start">
                            <div className='grid gap-3'>
                                <Link to='/single-product/payment-gateway'>
                                    <button className='w-full sm:w-52 bg-green border-green-700 border text-green-700 py-3 px-5 font-bold rounded hover:text-white hover:bg-green-700'>Buy Now</button>
                                </Link>
                                <button className='w-full sm:w-52 bg-white border-red-700 border text-red-700 py-3 font-bold rounded hover:text-white hover:bg-red-700' onClick={() => removeFromCart(items.id)}>Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
</>


  )
}

export default AddtoCart