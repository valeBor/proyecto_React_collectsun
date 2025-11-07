import "./Header.css";
import { Nav } from "../Nav/Nav";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* 🔹 LOGO */}
      <Link to={"/"}>
        <div className="logo">
          <img
            src="/images/Round_Photo_Oct202023_090136.png"
            alt="Logo"
            className="logo-img"
          />
          <h5>Collectsun</h5>
        </div>
      </Link>

      {/* 🔹 BOTÓN HAMBURGUESA */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menú"
      >
        {menuOpen ? <X size={22} /> : <Menu size={26} />}
      </button>

      {/* 🔹 CONTENEDOR DEL MENÚ */}
      <div className={`nav-container ${menuOpen ? "open" : ""}`}>
        <Nav />
      </div>
    </header>
  );
};

