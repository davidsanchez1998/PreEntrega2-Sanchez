
import { Cart, Checkout, ItemDetailContainer, ItemListContainer, NavBar } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useCart } from "./hooks/useCart";
import { Products } from "./components";




export const App = () => {
    
  const {productsInCart, addProductToCart, deleteProductFromCart, productsInCartQuantity} = useCart()
  return (
    <BrowserRouter>
      <NavBar productsInCartQuantity={productsInCartQuantity}/>
      <Routes>
        <Route path="/Products" element={<Products />} />
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:category" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer addProductToCart={addProductToCart}/>} />
        <Route path="/checkout" element={<Checkout products={productsInCart}/>} />
        <Route path="/cart" element={<Cart productsInCart={productsInCart} deleteProductFromCart={deleteProductFromCart}/>} />
      </Routes>
    </BrowserRouter>
  );
};
