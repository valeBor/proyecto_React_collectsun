import { Link } from "react-router-dom";
import "./Nav.css";
import { useCartContext } from "../../context/CartContext/useCartContext";

export const Nav = ({ isOpen }) => {
  const { getTotalItems } = useCartContext();

  return (
    <nav className={`nav ${isOpen ? "open" : ""}`}>
      <ul>
        <li><Link to={"/"}>Inicio</Link></li>
        <li><Link to={"/category/accesorios"}>Accesorios</Link></li>
        <li><Link to={"/category/arte"}>Arte</Link></li>
        <li>
          <Link to={"/carrito"}>
            Carrito
            {getTotalItems() > 0 && (
              <span className="in-cart">{getTotalItems()}</span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
