import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../../../services/products";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaTrash } from "react-icons/fa";
import "./AdminProductList.css";

export const AdminProductList = () => {
  const [productos, setProductos] = useState([]);
  const navigate = useNavigate();

  const cargarProductos = async () => {
    try {
      const data = await getProducts();
      setProductos(data);
    } catch (err) {
      toast.error("Error cargando productos");
    }
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  const handleDelete = async (id) => {

    toast.info(
      <div className="confirm-toast">
        <p>🗑️ ¿Eliminar este producto?</p>

        <div className="btn-group">
          {/* CONFIRMAR */}
          <button
            className="btn-confirm"
            onClick={async () => {
              toast.dismiss();

              try {
                await deleteProduct(id);
                toast.success(
                  <span>
                    <FaTrash style={{ marginRight: "8px" }} />
                    Producto eliminado
                  </span>
                );

                cargarProductos(); // refresca la lista
              } catch (error) {
                toast.error("Error eliminando el producto");
              }
            }}
          >
            Sí, eliminar
          </button>

          {/* CANCELAR */}
          <button className="btn-cancel" onClick={() => toast.dismiss()}>
            Cancelar
          </button>
        </div>
      </div>,
      {
        autoClose: false,
        closeOnClick: false,
      }
    );
  };

  return (
    <section className="admin-list">
      <h2>Productos cargados</h2>

      {productos.map((p) => (
        <div className="admin-item" key={p.id}>
          <img src={p.imageUrl} alt={p.name} />
          <div>
            <h3>{p.name}</h3>
            <p>${p.price}</p>
          </div>

          <button onClick={() => navigate(`/admin/editar/${p.id}`)} className="btn-edit">
            Editar
          </button>

          <button onClick={() => handleDelete(p.id)} className="btn-delete">
            Eliminar
          </button>
        </div>
      ))}
    </section>
  );
};
