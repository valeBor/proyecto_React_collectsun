import { Item } from "../Item/Item";
import './ItemList.css';
import { Boton } from "../Boton/Boton";
import { Link } from "react-router-dom";

export const ItemList = ({ lista }) => {
  //pasamos el button como children, no es obligatorio

  return (
    <>
    <div className="item-list">
      {lista.length ? (
        lista.map((prod) => (
          <Link to={`/detail/${prod.id}`} key={prod.id} >
          <Item  {...prod}/> 
          </Link>))
      ) : (
        <p>No hay productos</p>
      )}
    </div>
    </>
  );
};










    