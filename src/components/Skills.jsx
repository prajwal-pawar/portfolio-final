import { motion } from "framer-motion";
import { skills } from "../data/skills";
import "../styles/skills.css";

const Skills = () => {
  return (
    <motion.div
      className="skills-container"
      initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h3 className="skills-title">Skills</h3>
      <motion.ul
        className="skills-section"
        initial={{ opacity: 0, x: -30 }}
        // animate={{ opacity: 1, x: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div>
          <h3 className="skill-category">Frontend</h3>
        </div>
        <div className="skills-list">
          {skills.frontend.map((skill, index) => (
            <motion.li
              key={index}
              className="skill"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              {/* render icons from skills data */}
              <skill.icon size={30} />
              <span className="skill-label">{skill.label}</span>
            </motion.li>
          ))}
        </div>
      </motion.ul>

      <motion.ul
        className="skills-section"
        initial={{ opacity: 0, x: 30 }}
        // animate={{ opacity: 1, x: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div>
          <h3 className="skill-category">Backend</h3>
        </div>
        <div className="skills-list">
          {skills.backend.map((skill, index) => (
            <motion.li
              key={index}
              className="skill"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              {/* render icons from skills data */}
              <skill.icon size={30} />
              <span className="skill-label">{skill.label}</span>
            </motion.li>
          ))}
        </div>
      </motion.ul>

      <motion.ul
        className="skills-section"
        initial={{ opacity: 0, x: -30 }}
        // animate={{ opacity: 1, x: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div>
          <h3 className="skill-category">Tools</h3>
        </div>
        <div className="skills-list">
          {skills.tools.map((skill, index) => (
            <motion.li
              key={index}
              className="skill"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              {/* render icons from skills data */}
              <skill.icon size={30} />
              <span className="skill-label">{skill.label}</span>
            </motion.li>
          ))}
        </div>
      </motion.ul>
    </motion.div>
  );
};

export default Skills;
