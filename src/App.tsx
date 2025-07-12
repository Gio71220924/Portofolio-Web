import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      const yOffset = -80;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div>
      <Header onContactClick={scrollToContact} />
      <About />
      <Skills />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
