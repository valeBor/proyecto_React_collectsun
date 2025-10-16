import { useState } from "react";
import { Modal } from "./Modal";
import { Boton } from "./Boton";

export default function App() {
  const [abierto, setAbierto] = useState(false);

  return (
    <div>
      <Boton onClick={() => setAbierto(true)}>Abrir Modal</Boton>

      <Modal isOpen={abierto} onClose={() => setAbierto(false)}>
        {/* 👇 Esto es lo que va a “entrar” en {children} */}
        <h2>Hola desde el modal 👋</h2>
        <p>Este es el texto que quieras mostrar al usuario.</p>
      </Modal>
    </div>
  );
}
