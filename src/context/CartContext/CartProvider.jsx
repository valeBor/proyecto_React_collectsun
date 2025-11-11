import { useState } from "react";
import { CartContext } from "./CartContext";
import { toast, ToastContainer } from "react-toastify";
import { FaShoppingBag, FaTrashAlt, FaSun } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import "./CartProvider.css"; // 🎨 estilos personalizado


export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const exists = (id) => cart.some((p) => p.id === id);

  const addItem = (item) => {
    if (exists(item.id)) {
      const updatedCart = cart.map((prod) =>
        prod.id === item.id
          ? { ...prod, quantity: prod.quantity + item.quantity }
          : prod
      );
      setCart(updatedCart);
      toast.info(
        <span>
          <FaSun style={{ marginRight: "8px", color: "#cbb080" }} />
          Cantidad de <strong>{item.name}</strong> actualizada 🌞
        </span>
      );
    } else {
      setCart([...cart, item]);
      toast.success(
        <span>
          <FaShoppingBag style={{ marginRight: "8px" }} />
          <strong>{item.name}</strong> agregado al carrito
        </span>
      );
    }
  };

  const clearCart = () => {
    setCart([]);
    toast.warning(
      <span>
        <FaSun style={{ marginRight: "8px", color: "#fbdbeb" }} />
        Carrito vaciado
      </span>
    );
  };

  const deleteItem = (id) => {
    const filtered = cart.filter((p) => p.id !== id);
    setCart(filtered);
    toast.error(
      <span>
        <FaTrashAlt style={{ marginRight: "8px" }} />
        Producto eliminado
      </span>
    );
  };

  const getTotalItems = () =>
    cart.reduce((acc, p) => acc + p.quantity, 0);

  const total = () =>
    Math.round(cart.reduce((acc, p) => acc + p.price * p.quantity, 0) * 100) /
    100;

  const checkout = () => {
  toast.info(
    <div className="confirm-toast">
      <p>☀️ ¿Confirmás tu compra?</p>
      <div className="btn-group">
        <button
          className="btn-confirm"
          onClick={() => {
            toast.dismiss();
            toast.success(
              <span>
                <FaSun style={{ marginRight: "8px", color: "#cbb080" }} />
                ¡Compra realizada con éxito!
              </span>
            );
            clearCart();
          }}
        >
          Sí, finalizar
        </button>
        <button className="btn-cancel" onClick={() => toast.dismiss()}>
          Cancelar
        </button>
      </div>
    </div>,
    { autoClose: false, closeOnClick: false }
  );
};

  const values = {
    cart,
    addItem,
    deleteItem,
    clearCart,
    getTotalItems,
    total,
    checkout,
  };

  return (
    <CartContext.Provider value={values}>
      {children}
      {/* 📦 Contenedor global de notificaciones */}
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </CartContext.Provider>
  );
};
