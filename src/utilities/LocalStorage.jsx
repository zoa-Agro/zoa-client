import Swal from "sweetalert2";

// use local storage to manage cart data
const addToLocalStorage = (id) => {
    let shoppingCart = getShoppingCart();
    // add quantity
    const quantity = shoppingCart[id];
    if (!quantity) {
        Swal.fire({
            title: 'Success!',
            text: 'Successfully Added to Cart',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
        shoppingCart[id] = 1;
    }
    else {
        Swal.fire({
            title: 'Success!',
            text: 'Successfully Added to Cart',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const removeFromLocalStorage = id => {
    const shoppingCart = getShoppingCart();
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
}

const getShoppingCart = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export {
    addToLocalStorage,
    removeFromLocalStorage,
    getShoppingCart,
    deleteShoppingCart
}