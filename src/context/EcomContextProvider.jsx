import React, { useState, useEffect } from 'react'
import ecomContext from './context'

const EcomContextProvider = ({ children }) => {
  const [image, setImage] = useState('')
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [id, setId] = useState('')

  const [cartcount, setCartCount] = useState(0)

  const [image1, setImage1] = useState('')
  const [title1, setTitle1] = useState('')
  const [price1, setPrice1] = useState('')
  const [id1, setId1] = useState('')

  const [cartItems, setCartItems] = useState([])

  const addCart = (items) =>{
    
    setCartItems([...cartItems, items]);
    setCartCount(cartItems.length+1)
    
  }


  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));

    setCartCount(cartItems.length-1)
    console.log(cartcount)

  };

  return (
    <ecomContext.Provider
      value={{
        image, title, price, id,
        setImage, setPrice, setTitle, setId,
        image1, title1, price1, id1,
        setImage1, setTitle1, setPrice1, setId1,
        cartItems, addCart, cartcount, removeFromCart
      }}>
      {children}
    </ecomContext.Provider>
  )
}

export default EcomContextProvider