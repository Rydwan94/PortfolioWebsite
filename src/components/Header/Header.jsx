import { useContext, useState } from "react";
import "../../css/Header.css";
import { Context } from "../../context/context";

const Header = () => {
  const { myProjectsRef, footerRef, techStackRef, myHobbiesRef } = useContext(Context);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const hideMenu = (ref) => {
    ref.current.scrollIntoView();

    setIsMenuOpen(false);
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
          <li onClick={() => hideMenu(techStackRef)}>Technology</li>
          <li onClick={() => hideMenu(myProjectsRef)}>Projects</li>
          <li onClick={() => hideMenu(myHobbiesRef)}>My Hobby</li>
          <li onClick={() => hideMenu(footerRef)}>Get In Touch</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
