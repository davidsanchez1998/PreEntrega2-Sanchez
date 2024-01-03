
import { AiOutlineShoppingCart } from "react-icons/ai";

export const CartWidget = ({productsInCartQuantity}) => {
  return (
    <div className="h-25">
        <AiOutlineShoppingCart color="black" size={30}/>
        <strong>{productsInCartQuantity}</strong>
    </div>
  )
}