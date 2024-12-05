import { useContext } from "react";
import { AppContext } from "../AppContext";
import "../Styles/styles.css";

const Footer = () => {
  const { state } = useContext(AppContext);
  const { theme } = state;

  return (
    <footer className={`footer ${theme}`}>
      <div className="footer-left">
        <p>Powered by</p>
        <img src="/DH.ico" alt="DH-logo" className="dh-logo" />
      </div>
      <div className="footer-right">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="/images/ico-facebook.png" alt="Facebook" className="social-icon" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="/images/ico-instagram.png" alt="Instagram" className="social-icon" />
        </a>
        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
          <img src="/images/ico-tiktok.png" alt="TikTok" className="social-icon" />
        </a>
        <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
          <img src="/images/ico-whatsapp.png" alt="WhatsApp" className="social-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;