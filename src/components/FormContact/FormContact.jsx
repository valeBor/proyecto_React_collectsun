import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./FormContact.css";

export const FormContact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nombre || !formData.email || !formData.mensaje) {
      toast.error("Por favor completá todos los campos 📝");
      return;
    }

    toast.success("¡Mensaje enviado con éxito! 💌");
    setFormData({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <div className="form-contact">
      <h3>Formulario de Contacto</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Nombre"
          className="form-control"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Correo Electrónico"
          className="form-control"
        />
        <textarea
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          placeholder="Mensaje"
          rows="4"
          className="form-control"
        />

        <div className="button-container">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};








