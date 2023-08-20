import { FaJs, FaHtml5, FaCss3, FaReact } from "react-icons/fa";

import "../../../css/TechStackContainer.css";
import SingleProgressBar from "./SingleProgressBar";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../../context/context";

const TechStackContainer = () => {
  const [visible, setIsVisible] = useState(false);
  const { techStackRef } = useContext(Context);

  useEffect(() => {
    const handleScroll = () => {
      const elementRect = techStackRef.current.getBoundingClientRect();
      const elementIsVisible = elementRect.top < window.innerHeight;
      setIsVisible(elementIsVisible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [techStackRef]);


  return (
    <div ref={techStackRef} className={visible? "techStackContainer" : "hiddenTechStackContainer"}>
      <h2 className="techStackTitle">Tech Stack</h2>
      <SingleProgressBar
        techName={"HTML"}
        techIcon={<FaHtml5 className="tech-icon" />}
        width={80}
        isVisible={visible}
      />
      <SingleProgressBar
        techName={"CSS"}
        techIcon={<FaCss3 className="tech-icon" />}
        width={70}
      />
      <SingleProgressBar
        techName={"JavaScript"}
        techIcon={<FaJs className="tech-icon" />}
        width={65}
      />
      <SingleProgressBar
        techName={"React"}
        techIcon={<FaReact className="tech-icon" />}
        width={90}
      />
    </div>
  );
};

export default TechStackContainer;
