//arrow con afe tab
import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css"
import { getProducts } from "../../services/products";

export const ItemListContainer = ({ titulo }) => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    getProducts(category)
      .then((data) =>
        setProducts(data))
      .catch((err) => {

        console.log(err);
      });

  }, [category]);


  return (
    <section className="section-creacionesS">
      <div className="section-h1">
        <h1>{titulo}</h1>
      </div>
      <div className="products-container">
        <ItemList lista={products} />
      </div>
    </section>

  );
};

