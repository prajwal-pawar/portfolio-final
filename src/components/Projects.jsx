import { motion } from "framer-motion";
import { projects } from "../data/projects";
import "../styles/projects.css";

const Projects = () => {
  return (
    <motion.div
      className="project-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="projects-label">Projects</h2>

      <div className="projects-list">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>

            <ul className="tech-list">
              {project.technologies.map((tech, index) => (
                <li className="project-tech" key={index}>
                  {tech} ·
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
