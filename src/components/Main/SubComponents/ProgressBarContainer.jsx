import { FaJs, FaHtml5, FaCss3, FaReact } from 'react-icons/fa';

import '../../../css/TechStackContainer.css'
import SingleProgressBar from "./SingleProgressBar";

const TechStackContainer = () => {  

  return (
    <div className="techStackContainer">
        <h2 className='techStackTitle'>Tech Stack</h2>
      <SingleProgressBar techName={"HTML"} techIcon={<FaHtml5 className="tech-icon" />} width={70} />
      <SingleProgressBar techName={"CSS"} techIcon={<FaCss3 className="tech-icon" />} width={80} />
      <SingleProgressBar techName={"JavaScript"} techIcon={<FaJs className="tech-icon" />} width={65}/>
      <SingleProgressBar techName={"React"} techIcon={<FaReact className="tech-icon" />} width={90} />
    </div>
  );
};

export default TechStackContainer;
