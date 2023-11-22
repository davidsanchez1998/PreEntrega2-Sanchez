
import { AiOutlineShoppingCart } from "react-icons/ai";

export const CartWidget = () => {
  return (
    <div className="h-25">
        <AiOutlineShoppingCart color="black" size={30}/>
        <strong>5</strong>
    </div>
  )
}