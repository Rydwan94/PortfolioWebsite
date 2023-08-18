import '../../../css/TechIconsContainer.css'

import { FaJs, FaHtml5, FaCss3, FaReact } from 'react-icons/fa';


const TechIconsContainer = () => {
    return ( 
        <div className='TechIconsContainer'>
            <FaHtml5 className="tech-icon" />
            <FaCss3 className="tech-icon" />
            <FaJs className="tech-icon" />
            <FaReact className="tech-icon" />
        </div>
     );
}
 
export default TechIconsContainer;