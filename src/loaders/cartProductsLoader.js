import { getShoppingCart } from "../utilities/LocalStorage";

const cartProductsLoader= async()=>{
const loadedProducts = await fetch('http://localhost:5000/allProducts')
const products = await loadedProducts.json()

const storedCart = getShoppingCart();
const savedCart = [];
//find cart products in all products
for (const id in storedCart) {
  const addedProduct = products.find((product) => product._id === id);
  if (addedProduct) {
    const quantity = storedCart[id];
    addedProduct.quantity = quantity;
    savedCart.push(addedProduct);
  }
}
console.log(savedCart)
return  savedCart;
}
export default cartProductsLoader;