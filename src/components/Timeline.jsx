import { motion } from "framer-motion"
import Reveal from "./Reveal"

export default function Timeline() {

  const timeline = [

    {
      year: "2023",

      title:
        "Engineering Journey Begins",

      description:
        "Joined Lendi Institute of Engineering & Technology and discovered strong interest in Electronics, Embedded Systems and intelligent real-world systems instead of focusing only on traditional VLSI paths.",
    },

    {
      year: "2024 - 2025",

      title:
        "Builder & Innovator Phase",

      description:
        "Built multiple real-world systems including Smart Water Tank System, Smart Home Automation System, Smart Plant Monitoring System, Driver Sleep Detection System, WiFi Controlled Car and Smart Food Court Management System along with several mini IoT and automation projects.",
    },

    {
      year: "2025",

      title:
        "IIT Tirupati PNT Internship",

      description:
        "Worked on Terrain Aware Hybrid Vehicle with Route Optimization using GNSS, intelligent navigation, terrain awareness, AI-assisted systems and hybrid vehicle efficiency optimization.",
    },

  ]

  return (

    <section
      className="timeline-section"
      id="journey"
    >

      <Reveal>

        <div className="timeline-header">

          <p className="timeline-tag">
            JOURNEY
          </p>

          <h2 className="timeline-title">
            My Engineering Evolution
          </h2>

        </div>

      </Reveal>

      <div className="timeline-wrapper">

        {timeline.map((item, index) => (

          <Reveal key={index}>

            <motion.div

              whileHover={{
                scale: 1.02,
              }}

              transition={{
                duration: 0.3,
              }}

              className="timeline-card"
            >

              <div className="timeline-dot"></div>

              <div className="timeline-content">

                <span className="timeline-year">
                  {item.year}
                </span>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

              </div>

            </motion.div>

          </Reveal>

        ))}

      </div>

    </section>
  )
}