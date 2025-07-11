import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "../style/Footer.css";

const Footer = () => {
  return (
    <motion.footer
      className="footer-container text-center py-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="footer-message mb-3">
        <p className="fs-5 fw-semibold">Thanks for visiting! Let’s connect.</p>

        <div className="footer-icons d-flex justify-content-center gap-4 mt-3">
          <motion.a
            href="https://www.linkedin.com/in/giohp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="footer-icon"
          >
            <FaLinkedin size={24} />
          </motion.a>

          <motion.a
            href="https://github.com/Gio71220924"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="footer-icon"
          >
            <FaGithub size={24} />
          </motion.a>

          <motion.a
            href="mailto:stevianohp@gmail.com"
            aria-label="Email Me"
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="footer-icon"
          >
            <FaEnvelope size={24} />
          </motion.a>
        </div>
      </div>

      <div className="footer-credits mt-4">
        <small className="d-block">© 2025 Giovanka Steviano. All rights reserved.</small>
        <small>Designed & Developed by Giovanka S.</small>
      </div>
    </motion.footer>
  );
};

export default Footer;
