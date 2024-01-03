
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ name, id, description, img, price, stock, addProductToCart }) => {

    const onAdd = (quantity) => {
      const productToBeAdded = {
        id,
        name,
        description,
        price,
        quantity,
      }
      addProductToCart(productToBeAdded)
      }

  return (
    <div className="border m-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title" >{name}</h5>
          <img src={img} alt="" />
          <p className="card-text"> {description} </p>
          <p>Precio: {price} </p>
          <ItemCount stock={stock} onAdd={onAdd} />
        </div>
      </div>
    </div>
  );
};