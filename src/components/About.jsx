import { motion } from "framer-motion"
import Reveal from "./Reveal"

export default function About() {

  const stats = [
    {
      number: "20+",
      label: "Projects Built",
    },

    {
      number: "5+",
      label: "Domains Explored",
    },

    {
      number: "3rd",
      label: "Year ECE Student",
    },

    {
      number: "∞",
      label: "Ideas & Innovation",
    },
  ]

  return (

<section
  id="about"
  className="about-section"
>
      {/* LEFT */}

      <Reveal>

        <div className="about-left">

          <p className="about-tag">
            ABOUT ME
          </p>

          <h2 className="about-title">
            Building futuristic systems
            through AI, Embedded
            Intelligence & Innovation.
          </h2>

          <p className="about-description">

            I’m Vignan, an ECE student passionate about
            building futuristic technology systems using
            Artificial Intelligence, IoT, Embedded Systems,
            GNSS and Computer Vision.

            I love creating projects that solve real-world
            problems with intelligent engineering and
            futuristic interaction design.

          </p>

        </div>

      </Reveal>

      {/* RIGHT */}

      <Reveal>

        <div className="about-right">

          {stats.map((item, index) => (

            <motion.div

              key={index}

              whileHover={{
                y: -8,
                scale: 1.03,
              }}

              className="stat-card"
            >

              <h3>
                {item.number}
              </h3>

              <p>
                {item.label}
              </p>

            </motion.div>

          ))}

        </div>

      </Reveal>

    </section>
  )
}