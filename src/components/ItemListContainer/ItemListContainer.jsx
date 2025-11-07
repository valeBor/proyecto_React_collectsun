//arrow con afe tab
import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css"

export const ItemListContainer = ({titulo}) => {
    const [products, setProducts]= useState([]);
    const {category}= useParams(); 

useEffect (() => {
  fetch("https://690939e32d902d0651b30a9b.mockapi.io/products").then((res) => {
    if(!res.ok){
      throw new Error("Hubo un problema al buscar productos")

    }
    return res.json();

  })
  .then((data) => {
    if (category){
      setProducts(data.filter((prod) => prod.category === category));
    } else {

      setProducts(data);
    }
  })
  .catch((err) => {

     console.log(err);
  });
    
}, [category]);


    return (
        <section className="section-creacionesS">
        <div className="section-h1">
        <h1>{titulo}</h1>
        </div>
        <ItemList lista={products} />
        
        </section>

    );
};

