import { useEffect, useState} from "react";


import '../../../css/SingleProgressBar.css'

const SingleProgressBar = ({techName, techIcon, width}) => {

    const [progress, setProgress] = useState(0)

    useEffect(() => {
      const Interval = setInterval(() => {
        if (progress < width) {
          setProgress(progress + 1);
        } else {
          clearInterval(Interval);
        }
      }, .2);
  
      return () => clearInterval(Interval);
    },[progress] );


  return (
      <section className="singleProgressBar">
        <h3>{techName} {techIcon}</h3>
        <div style={{width : `${progress }%`}}>{progress} %</div>
      </section> 
  );
};

export default SingleProgressBar;
