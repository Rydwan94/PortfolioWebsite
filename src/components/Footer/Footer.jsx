import EmailForm from "./subComponents/EmailForm";

import '../../css/Footer.css'
import FooterDescription from "./subComponents/FooterDescription";


const Footer = () => {
  return ( 
    <footer>
      <FooterDescription />
      <EmailForm />
    </footer>
   );
}
 
export default Footer;

