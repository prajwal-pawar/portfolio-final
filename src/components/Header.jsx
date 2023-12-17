import { motion } from "framer-motion";
import { FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";
import { TbBrandGmail } from "react-icons/tb";
import "../styles/header.css";

const Header = () => {
  return (
    <motion.header
      className="header"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="name"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
      >
        Prajwal Pawar
      </motion.h1>

      <motion.p
        className="title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
      >
        Mern stack developer && linux enthusiast
      </motion.p>

      <div className="social-icons">
        <motion.a
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, transition: { delay: 1 } }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <FiLinkedin size={30} />
        </motion.a>

        <motion.a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <FiGithub size={30} />
        </motion.a>

        <motion.a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4, duration: 0.5 }}
        >
          <FiTwitter size={30} />
        </motion.a>

        <motion.a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.6, duration: 0.5 }}
        >
          <TbBrandGmail size={30} />
        </motion.a>
      </div>
    </motion.header>
  );
};

export default Header;
