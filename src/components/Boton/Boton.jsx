// Boton.jsx
export const Boton = ({ texto, color, onClick }) => {
  const estilos = {
    backgroundColor: color,
    color: "brown",
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  };

  return (
    <button style={estilos} onClick={onClick}>
      {texto}
    </button>
  );
};


