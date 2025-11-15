import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./LoginUser.css"; // Va a usar los estilos de Login.css también
import { useNavigate } from "react-router-dom";

const LoginUser = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    pass: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success(`Bienvenido ${user.name} 🌞`);
    setUser({ name: "", email: "", pass: "" });

    // 🔹 Redirigir al usuario a la página principal o perfil
    navigate("/");
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Ingresar</h2>

        <label>Nombre:</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          placeholder="Ingresa tu nombre"
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Ingresa tu email"
          required
        />

        <label>Contraseña:</label>
        <input
          type="password"
          name="pass"
          value={user.pass}
          onChange={handleChange}
          placeholder="Ingresa tu contraseña"
          required
        />

        <button type="submit" className="login-btn">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default LoginUser;
