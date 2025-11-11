import { Link } from "react-router-dom";
import "./Nav.css";
import { useCartContext } from "../../context/CartContext/useCartContext";
import { FaEnvelope, FaShoppingCart, FaUser } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";  // FontAwesome

export const Nav = ({ isOpen }) => {
  const { getTotalItems } = useCartContext();

  return (
    <nav className={`nav ${isOpen ? "open" : ""}`}>
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/category/accesorios">Accesorios</Link></li>
        <li><Link to="/category/arte">Arte</Link></li>

        {/* 🔹 Contacto con ícono */}
        <li>
          <Link to="/contacto" className="nav-icon">
            <FaEnvelope />
          </Link>
        </li>

        {/* 🔹 Carrito con ícono y contador */}
        <li>
          <Link to="/carrito" className="nav-icon">
              <FaShoppingBag size={18} style={{ marginRight: "5px" }} />
            {getTotalItems() > 0 && (
              <span className="in-cart">{getTotalItems()}</span>
            )}
          </Link>
        </li>

        {/* 🔹 Login con ícono */}
        <li>
          <Link to="/login" className="nav-icon">
            <FaUser /> 
          </Link>
        </li>
      </ul>
    </nav>
  );
};

