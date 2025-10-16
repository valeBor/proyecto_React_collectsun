import React, { useState } from 'react';
import './Formulario.css';   // 👈 cambia esto

export default function Formulario() {
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function manejarEnvio(e) {
    e.preventDefault();
    alert(`Usuario: ${usuario}, Email: ${email}, Password: ${password}`);
  }

  return (
    <form onSubmit={manejarEnvio} className="formRegistro">  {/* 👈 string */}
      <h2 className="titulo">Formulario de Registro</h2>

      <input
        type="text"
        placeholder="Nombre de usuario"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
        className="input"
      />

      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input"
      />

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input"
      />

      <button type="submit" className="boton">Registrarse</button>
    </form>
  );
}




