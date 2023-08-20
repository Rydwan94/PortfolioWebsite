import React, { useContext, useEffect, useState } from "react";
import "../../../css/SingleProgressBar.css";
import { Context } from "../../../context/context";

const SingleProgressBar = ({ techName, techIcon, width }) => {
  const [progress, setProgress] = useState(0);
  const [visible, setIsVisible] = useState(false);
  const { progressBarRef } = useContext(Context);

  useEffect(() => {
    const handleScroll = () => {
      const rectDirection = progressBarRef.current.getBoundingClientRect();
      const elementIsVisible = rectDirection.top < window.innerHeight;
      setIsVisible(elementIsVisible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [progressBarRef]);

  useEffect(() => {
    let animationFrameId; // Utwórz zmienną dla requestAnimationFrame - ważne!

    const animateProgress = () => {
      if (progress < width) {
        setProgress(progress + 1);
        animationFrameId = requestAnimationFrame(animateProgress);
      }
    };

    if (visible) {
      animationFrameId = requestAnimationFrame(animateProgress);
    }

    return () => {
      cancelAnimationFrame(animationFrameId); // Zatrzymaj animację, gdy komponent jest odmontowywany
    };
  }, [visible, progress, width]); // Zmienione zależności

  return (
    <section ref={progressBarRef} className="singleProgressBar">
      <h3>
        {techName} {techIcon}
      </h3>
      <div style={{ width: `${progress}%` }}>{progress}%</div>
    </section>
  );
};

export default SingleProgressBar;
