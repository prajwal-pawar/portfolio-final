import { motion } from "framer-motion";
import { skills } from "../data/skills";
import "../styles/about.css";

const About = () => {
  return (
    <motion.div
      className="about-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="about-title">About Me</h2>
      <p className="about-info">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida
        tortor ut dolor tristique, ac interdum erat finibus. Nullam ut augue ac
        urna euismod volutpat id ac felis.
      </p>

      <motion.div
        className="skills-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h3 className="skills-title">Skills</h3>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <motion.li
              key={index}
              className="skill"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              {/* render icons from skills data */}
              <skill.icon size={30} />
              <span className="skill-label">{skill.label}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default About;
