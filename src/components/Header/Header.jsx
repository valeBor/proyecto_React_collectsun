import "./Header.css";
import { Nav } from "../Nav/Nav";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
     <Link to={"/"}>
      <div className="logo">
        <img src="/images/Round_Photo_Oct202023_090136.png" alt="Logo" className="logo-img" /><h5>Collectsun</h5> 
      </div>
    </Link>
      <Nav />
    </header>
  );
};

