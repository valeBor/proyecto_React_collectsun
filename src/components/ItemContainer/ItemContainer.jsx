//arrow con afe tab
import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";

export const ItemContainer = ({titulo}) => {
    const [products, setProducts]= useState([]) 

useEffect (() => {
  fetch("/data/productos.json").then((res) => {
    if(!res.ok){
      throw new Error("Hubo un problema al buscar productos")

    }
    return res.json();

  })
  .then((data) => {

    setProducts(data);

  })
  .catch((err) => {

     console.log(err);
  });
    
}, []);


    return (
        <section>

        <h1>{titulo}</h1>
        <ItemList lista={products} />
        
        </section>

    );
};


