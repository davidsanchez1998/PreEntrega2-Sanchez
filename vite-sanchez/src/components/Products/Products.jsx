import { useEffect } from "react"
import { collection, getDocs, query  } from "firebase/firestore"
import { db } from "../firebaseConfig";

export const Products = () => {

    useEffect ( () => {

        const myProducts = query( collection( db, "products" ) );
        getDocs(myProducts)
          .then( (resp) => {

         console.log(resp);

        })
        .catch( error => console.loge(error));



     }, []);
    return <div>Products</div>;
    
};