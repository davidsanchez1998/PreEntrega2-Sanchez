
import { useEffect, useState } from "react";
import { getProducts } from "../../asyncMock";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";

export const ItemListContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const {products, setProducts} = useProducts()
  const { category } = useParams();


  useEffect(() => {
    setIsLoading(true);
    getProducts()
      .then((resp) => {
        if (category) {
          const productsFilter = resp.filter((product) => product.category === category);
            if(productsFilter.length > 0) {
              setProducts(productsFilter);
            } else {
              setProducts(resp);
            }

        } else {
          setProducts(resp);
        }

        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [category]);

  return <>{isLoading ? <h2 className="msje"> Cargando productos... </h2> : <ItemList products={products} />}</>;
};