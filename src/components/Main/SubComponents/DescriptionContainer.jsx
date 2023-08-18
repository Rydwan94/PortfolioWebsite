import { useEffect, useState } from "react";

import { FiMail } from "react-icons/fi";

import "../../../css/FirstContainer.css";

import img from "../../../img/me.png";

const DescriptionContainer = () => {
  const [text, setText] = useState("");
  const content = " I'm Programmer";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex++;
      setText((prevText) => prevText + content[currentIndex]);

      if (currentIndex === content.length) {
        setText("");
        currentIndex = 0;
      }
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="firstContainer">
      <section className="imgContainer">
        <img src={img} alt="me" />
      </section>
      <section className="aboutMeDescription">
        <h2>{text}</h2>
        <p>
          I discovered programming over 2 years ago. I was captivated by the
          possibility of creating individual projects, solving logical puzzles
          and introducing my own solutions. Taking up studies allowed me to
          learn new tools from practitioners and improve my skills that I will
          be able to use in my future professional work.
        </p>
        <button>
          <a href="mailto:l.rydwanski@gmail.com">
          <FiMail className="emailIcon" /> Contact Me
          </a>
        </button>
      </section>
    </div>
  );
};

export default DescriptionContainer;
