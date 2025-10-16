import "./Header.css";
import { Nav } from "../Nav/Nav";

export const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="public/images/Round Photo_Oct202023_090136.png" alt="Logo" className="logo-img" /><h5>Collect Sun</h5> 
      </div>

      <Nav />
    </header>
  );
};

