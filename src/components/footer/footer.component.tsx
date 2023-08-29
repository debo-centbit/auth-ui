import { Link } from "react-router-dom";
import './footer.css'
import { Colors } from "../themes/colors";




const Footer = () => {
  return (
    <footer className="footer-post">
      <div className="footer">
        <Link style={{color: Colors.black}} className="footer_link" to="">Terms and condition <span className="footer_dot">.</span></Link>
        <Link style={{color: Colors.black}} className="footer_link" to="">Privacy policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
