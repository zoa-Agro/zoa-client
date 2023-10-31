import React, { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

 const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (data) => {
    setCart(data);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;