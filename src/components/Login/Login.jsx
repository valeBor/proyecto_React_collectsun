import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext/useAuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

export const Login = () => {
  const [userForm, setUserForm] = useState({
    name: "",
    password: "",
  });

  const { user, login } = useAuthContext();
  const navigate = useNavigate();

  if (user) {
    return <Navigate to="/admin/alta-productos" />;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserForm({ ...userForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userForm.name.trim() === "" || userForm.password.trim() === "") {
      toast.warning("Completá todos los campos");
      return;
    }

    const success = login(userForm.name, userForm.password);

    if (success) {
      toast.success(`Bienvenido ${userForm.name} 🌞`);
      navigate("/admin/alta-productos");
    } else {
      toast.error("Credenciales incorrectas ❌");
      setUserForm({ name: "", password: "" });
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Iniciar sesión</h2>

        <label>Usuario:</label>
        <input
          type="text"
          name="name"
          value={userForm.name}
          onChange={handleChange}
        />

        <label>Contraseña:</label>
        <input
          type="password"
          name="password"
          value={userForm.password}
          onChange={handleChange}
        />

        <button type="submit" className="login-btn">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};
