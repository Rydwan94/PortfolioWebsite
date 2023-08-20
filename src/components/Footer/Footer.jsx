import EmailForm from "./subComponents/EmailForm";

import "../../css/Footer.css";
import FooterDescription from "./subComponents/FooterDescription";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/context";

const Footer = () => {
  const { footerRef } = useContext(Context);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const elementRect = footerRef.current.getBoundingClientRect();
      const elementIsVisible = elementRect.top < window.innerHeight;
      setIsVisible(elementIsVisible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [footerRef]);

  return (
    <footer>
      <section ref={footerRef} className="mainFooterContent">
        <FooterDescription isVisible={isVisible} />
        <EmailForm isVisible={isVisible} />
      </section>
      <section className="rights">
        &copy; 2023 <span>Rydwan94</span> | All Reserved.
      </section>
    </footer>
  );
};

export default Footer;
