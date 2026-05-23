import MagneticButton from "./MagneticButton"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import FutureText from "./FutureText"
import FloatingTech from "./FloatingTech"
import ParallaxLayer from "./ParallaxLayer"
export default function Hero() {
  return (
    <section
  id="home"
  className="hero-section"
>
        <FloatingTech />

      {/* BACKGROUND GLOWS */}

      <ParallaxLayer speed={80}>
        <div className="hero-glow hero-glow-1"></div>
      </ParallaxLayer>

      <ParallaxLayer speed={100}>
        <div className="hero-glow hero-glow-2"></div>
      </ParallaxLayer>

      <ParallaxLayer speed={40}>
        <div className="hero-content">

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-subtitle"
        >
          Welcome To My Portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="hero-title"
        >
          <span className="gradient-text">
            Pemmaraju
          </span>

          <br />

          <span className="white-text">
            Venkata Vignan
          </span>
        </motion.h1>

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.8 }}
  className="hero-description"
>
  <FutureText />
</motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="hero-buttons"
        >
          <a
            href="#projects"
            className="hero-project-link"
          >
            <MagneticButton>
              View Projects
            </MagneticButton>
          </a>

          <a
            href="/resume.pdf"
            download
            className="secondary-button"
        >
            Download Resume
         </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="hero-socials"
        >

          <a
            href="https://github.com/Vignan-Pemmaraju"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/venkata-vignan-pemmaraju-97b717303/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin />
          </a>

        </motion.div>

        </div>
      </ParallaxLayer>

    </section>
  )
}