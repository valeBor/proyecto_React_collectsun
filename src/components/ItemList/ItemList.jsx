import { Item } from "../Item/Item";
import "./ItemList.css";
import { Link } from "react-router-dom";

export const ItemList = ({ lista }) => {
  return (
    <div className="item-list">
      {lista.length ? (
        lista.map((prod) => (
          <Link 
            to={`/detail/${prod.id}`} 
            key={prod.id}
            className="item-link"
          >
            <Item {...prod} />
          </Link>
        ))
      ) : (
        <p>No hay productos</p>
      )}
    </div>
  );
};










    