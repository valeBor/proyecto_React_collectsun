import { Item } from "../Item/Item";
import { Boton } from "../Boton/Boton";
import { useCartContext } from "../../context/CartContext/useCartContext";

export const ItemDetail = ({ detail }) => {
  const { addItem } = useCartContext();

  return (
    <Item {...detail}>
      <Boton
        texto="Enviar al carrito"
        color="beige"
        onClick={() => addItem(detail)}
      />
    </Item>
  );
};
