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
        Hi, I'm <span className="info-highlights">Prajwal Pawar.</span> A
        passionate <span className="info-highlights">Mern Stack developer</span>{" "}
        based in India. With a strong foundation in both frontend with{" "}
        <span className="info-highlights">React</span> and backend with{" "}
        <span className="info-highlights">Nodejs</span>, I enjoy building
        fullstack applications/websites. When I'm not coding, you can find me
        exploring new technologies, or enjoying a good cup of coffee while
        diving into a coding challenge. Let's create something amazing together!
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
