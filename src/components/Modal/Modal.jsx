// Modal.jsx
export const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // 👈 no se muestra si está cerrado

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          minWidth: "300px"
        }}
      >
        {children}

        <button onClick={onClose} style={{ marginTop: "10px" }}>
          Cerrar
        </button>
      </div>
    </div>
  );
};


