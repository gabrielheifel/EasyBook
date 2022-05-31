import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { api, createSession } from '../services/api';

export const CartFavoritesContext = createContext({})

export const CartFavoritesProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const handleAddItemToCart = (url, name, price) => {
    const itemObject = { url, name, price };
    setCart([...cart, itemObject]);
  }

  const handleRemoveItemToCart = (clickedItemIndex) => {
    const filteredCart = cart.filter(
      (cartItem) => cart.indexOf(cartItem) !== clickedItemIndex
    );
    setCart(filteredCart);
  }

  const clearCart = () => {
    setCart([]);
  }

  return(
    <CartFavoritesContext.Provider 
      value={{
        cart, 
        handleAddItemToCart, 
        handleRemoveItemToCart, 
        clearCart
      }}
    >
      {children}
    </CartFavoritesContext.Provider>
  )
}