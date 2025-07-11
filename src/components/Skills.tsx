import '../style/Skills.css';

import "../style/Skills.css";
import skillsData from "../data/skills.json";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as GrIcons from "react-icons/gr";
import { motion } from "framer-motion";

const Skills = () => {
  const getIcon = (iconName: string) => {
    return FaIcons[iconName] || SiIcons[iconName] || GrIcons[iconName] || null;
  };

  return (
    <section id="skills" className="container skills-section">
      <h2 className="skills-heading">
        <span>Skills</span>
        <span>.</span>
      </h2>

      <div className="row">
        {Object.entries(skillsData).map(([category, skills], idx) => (
          <div key={idx} className="col-md-6 col-lg-3 mb-4">
            <h5 className="skills-category-title">{category}</h5>
            {skills.map((skill: any, index: number) => {
              const IconComponent = getIcon(skill.icon);
              return (
                <motion.div
                  key={index}
                  className="skill-box"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.01 }}
                >
                  {IconComponent && <IconComponent size={18} />}
                  {skill.name}
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
