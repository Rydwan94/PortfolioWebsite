import React from 'react';
import '../../../css/FooterDescription.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const FooterDescription = ({isVisible}) => {
  return (
    <div className={isVisible ? "footerDescription" : "hiddenFooterDescription"}>
      <h2>Let's <br/>Connect</h2>
      <section>
        <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://github.com/Rydwan94" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </section>
    </div>
  );
}

export default FooterDescription;
