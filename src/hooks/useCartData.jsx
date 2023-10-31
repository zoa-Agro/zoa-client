import React, { useState } from 'react';

const useCartData = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (data) => {
      setCart(data);
     
    }
console.log(cart);

  return { cart, addToCart };
};

export default useCartData;