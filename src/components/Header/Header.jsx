import { useContext, useState } from "react";
import "../../css/Header.css";
import { Context } from "../../context/context";

const Header = () => {
  
  const {myProjectsRef} = useContext(Context);

  

  

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const hideMenu = (ref) => {
    ref.current.scrollIntoView();   
  };

  return (
    <header className="headerNavigation">
      <section>
        <h1>Łukasz Rydwański</h1>
        <div
          className={`menuIcon ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
      <nav className={`navMenu ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li onClick={hideMenu}>About</li>
          <li onClick={() => hideMenu(myProjectsRef)}>Projects</li>
          <li onClick={hideMenu}>Get In Touch</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
