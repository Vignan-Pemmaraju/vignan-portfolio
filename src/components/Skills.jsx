import { motion } from "framer-motion"
import Reveal from "./Reveal"

export default function Skills() {

  const skills = [
    "C language",
    "Raspberry Pi",
    "Python",
    "ESP32",
    "IoT",
    "AI",
    "Machine Learning",
    "GNSS",
    "Computer Vision",
    "Embedded Systems",
    "MongoDB",
    "Embedded C",
  ]

  return (

    <section
      id="skills"
      className="skills-section"
    >

      <Reveal>

        <div className="skills-header">

          <p className="skills-tag">
            SKILLS
          </p>

          <h2 className="skills-title">
            Technologies &
            Domains I Work With
          </h2>

        </div>

      </Reveal>

      <div className="skills-grid">

        {skills.map((skill, index) => (

          <Reveal key={index}>

            <motion.div

              whileHover={{
                y: -10,
                scale: 1.04,
              }}

              transition={{
                type: "spring",
                stiffness: 200,
              }}

              className="skill-card"
            >

              <div className="skill-glow"></div>

              <h3>
                {skill}
              </h3>

            </motion.div>

          </Reveal>

        ))}

      </div>

    </section>
  )
}