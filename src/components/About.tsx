import "../style/About.css";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const About = () => {
  const photoUrl = "/assets/profile.jpg";
  const cvUrl = "/assets/CV.pdf";

  return (
    <section id="about" className="container about-section">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="row align-items-center"
      >
        {/* FOTO */}
        <div className="col-md-4 text-center mb-4 mb-md-0">
          <img src={photoUrl} alt="Profile" className="profile-img img-fluid" />
        </div>

        {/* TEKS */}
        <div className="col-md-8 text-start">
          <h2 className="about-title">
            <TypeAnimation
              sequence={["ABOUT ME…..", 2000, "HELLO!", 2000, "ABOUT ME…..", 2000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>

          <p className="about-text">
            Hi! My name is Gio, I'm a 7th-semester Informatics student at Duta Wacana Christian University
            with a strong interest in Machine Learning and Cloud Computing. I love turning data into real
            solutions and exploring how scalable tech can make an impact.
          </p>

          <p className="about-text">
            I'm also diving into Full Stack Development and Computer Networking to broaden my skills.
            Currently open to internship opportunities where I can grow and contribute to meaningful projects.
          </p>

          <a href={cvUrl} download="Giovanka-CV.pdf" className="about-btn">
            Download CV
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
