import "../../../css/MyProjectsContainer.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import JudoSiteImage from "../../../img/judo.png";
import SearcherImageSite from "../../../img/imageSite.png";
import gamesSite from "../../../img/gamesSite.png";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../../context/context";

const imagesArray = [
  {
    id: 0,
    imgPath: JudoSiteImage,
    title: "Judo Path",
    sitePath: "https://rydwan94.github.io/JudoTechniquesExplorer-React/",
    siteCode: "https://github.com/Rydwan94/JudoTechniquesExplorer-React"
  },
  {
    id: 1,
    imgPath: SearcherImageSite,
    title: "Image Scout",
    sitePath: " https://rydwan94.github.io/Image-searchSite-React/",
    siteCode: "https://github.com/Rydwan94/Image-searchSite-React"
  },
  {
    id: 2,
    imgPath: gamesSite,
    title: "Gaming Hub",
    sitePath: "https://rydwan94.github.io/Games-Site-React/",
    siteCode: "https://github.com/Rydwan94/Games-Site-React"
  },
];

const MyProjectsContainer = () => {

  const { myProjectsRef } = useContext(Context);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(""); 
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const elementRect = myProjectsRef.current.getBoundingClientRect();
      const elementIsVisible = elementRect.top < window.innerHeight 
      setIsVisible(elementIsVisible);
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [myProjectsRef]);

  console.log(isVisible)
  const setActiveSlide = (index) => {
    if (index < currentSlide) {
      setDirection("Prev");
    } else {
      setDirection("Next");
    }
    setCurrentSlide(index);
    console.log(index);
  };

  const nextSlide = () => {
    setDirection("Next"); // Ustaw kierunek na "next"
    setCurrentSlide(
      (prevSlide) => (prevSlide + 1 + imagesArray.length) % imagesArray.length
    );
  };
  const prevSlide = () => {
    setDirection("Prev");
    setCurrentSlide((prevSlide) => (prevSlide + 1) % imagesArray.length);
  };

  const imagesList = imagesArray.map((image, index) => (
    <div
      key={image.id}
      className={
        index === currentSlide ? `activeSlide${direction}` : "inactiveSlide"
      }
      onClick={() => setActiveSlide(index)}
    >
      <img src={image.imgPath} alt={image.title} />
      <div className="projectsInfo">
        <h2>{image.title}</h2>
        <section>
          <a href={image.sitePath}><button>View Site</button></a>
          <a href={image.siteCode}><button>View Code</button></a>
        </section>
      </div>
    </div>
  ));

  return (
    <div ref={myProjectsRef} className={isVisible ? "carouselContainer" : "hiddenCarouselContainer" }>
      <h2 className="title">My Projects</h2>
      <section className="carouselSection">
        <button className="carouselButton" onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        {imagesList}
        <button className="carouselButton" onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </section>
    </div>
  );
};

export default MyProjectsContainer;
