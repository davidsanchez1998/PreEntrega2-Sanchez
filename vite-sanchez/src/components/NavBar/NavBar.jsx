
import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
  return (
    <nav className="d-flex justify-content-around p-4">
    <figure>
    <figcaption>
      <img className="img_nav" src="" alt="" style={{width: "50px"}}/>
      Panda CBD Store</figcaption>
      </figure>
      <div>
        <Link to="/">
          <button className="btn btn-info mx-2">Home</button>
        </Link>
        <Link to="/category/aceites">
          <button className="btn btn-info mx-2">Aceites</button>
        </Link>
        <Link to="/category/flores">
          <button className="btn btn-info mx-2">Flores</button>
        </Link>
        <Link to="/category/papeles y filtros">
          <button className="btn btn-info mx-2">Papeles y Filtros</button>
        </Link>
        <Link to="/category/otros">
          <button className="btn btn-info mx-2">Otros</button>
        </Link>
      </div>
      <Link to="/Cart">
        <CartWidget />
      </Link>
    </nav>
  );
};