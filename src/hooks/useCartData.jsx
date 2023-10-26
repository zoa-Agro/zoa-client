import React, { useState } from 'react';
import { useCart } from '../Providers/CartProvider';

const useCartData = () => {
    const [cart, setCart] = useState();
    const { state, dispatch } = useCart();

    const addToCart = (data) => {
      setCart(data);
      console.log("cart",data);
      dispatch({ type: 'ADD_TO_CART', payload: data});
    }
console.log(cart);

  return { cart, addToCart };
};

export default useCartData;