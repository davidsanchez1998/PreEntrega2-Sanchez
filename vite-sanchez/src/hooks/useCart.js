import { useState } from 'react'

export const useCart = () => {
    const [productsInCart, setProductsInCart] = useState([])

    const addProductToCart = (productToBeAdded) => {
        setProductsInCart([...productsInCart, productToBeAdded])
    }

    const deleteProductFromCart = (id) => {
      setProductsInCart(productsInCart.filter(product => product.id !== id))
  }


  return {productsInCart, addProductToCart, deleteProductFromCart, productsInCartQuantity: productsInCart.length}
}
