import { Link } from "react-router-dom";
import './footer.css'


const Footer = () => {
  return (
    <footer className="footer-post">
      <div className="footer">
        <Link className="footer_link" to="">Terms and condition <span className="footer_dot">.</span></Link>
        <Link className="footer_link" to="">Privacy policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
