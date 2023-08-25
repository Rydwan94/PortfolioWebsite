import { useContext, useEffect, useState } from "react";
import { Context } from "../../../context/context";

import "../../../css/MyHobbiesContainer.css";

import judoHobby from "../../../img/judoHobby.png";
import gymHobby from "../../../img/gymHobby.png";
import gamingHobby from "../../../img/gamingHobby.png";
import SingleHobbyCard from "./SingleHobbyCard";

const hobbyCardInfo = [
  {
    cardTitle: "Judo",
    imgSrc: judoHobby,
    imgAlt: "judo picture"
  },
  {
    cardTitle: "Gym",
    imgSrc: gymHobby,
    imgAlt: "gym picture"
  },
  {
    cardTitle: "Gaming",
    imgSrc: gamingHobby,
    imgAlt: "joystick picture"
  },
]

const MyHobbiesContainer = () => {
  const { myHobbiesRef } = useContext(Context);

  const [isVisible, setIsVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const hobbyList = hobbyCardInfo.map(hobby => <SingleHobbyCard key={hobby.cardTitle} {...hobby}/>)

  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled) {
        const elementRect = myHobbiesRef.current.getBoundingClientRect();
        const elementIsVisible = elementRect.top < window.innerHeight;
        setIsVisible(elementIsVisible);
        if(elementIsVisible){
            setHasScrolled(true)
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll)

}, [myHobbiesRef,hasScrolled]);


  return (
    <div ref={myHobbiesRef} className={isVisible ? "myHobbiesContainer" : "hiddenHobbiesContainer"}>
      <h2 className="hobbyTitle">My Hobbies</h2>
      <section className="myHobbies">
      {hobbyList}
      </section>
    </div>
  );
};

export default MyHobbiesContainer;
