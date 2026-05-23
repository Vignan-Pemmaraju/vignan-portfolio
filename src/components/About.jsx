import { motion } from "framer-motion"
import Reveal from "./Reveal"
import profileImage from "../assets/profile.png"

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

          <div className="about-image-wrapper">

            <div className="about-image-glow"></div>

            <img
              src={profileImage}
              alt="Vignan Profile"
              className="about-profile-image"
            />

          </div>

          <div className="about-content-section">

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

        </div>

      </Reveal>

      {/* RIGHT */}

      <Reveal>

        <div className="about-right">

          <div className="about-hero-text">

            <p className="about-tag">
              ABOUT ME
            </p>

            <h2 className="about-title">

              Building futuristic systems
              through AI, Embedded Intelligence
              & Innovation.

            </h2>

          </div>

          <div className="stats-grid">

            {stats.map((item, index) => (

              <motion.div

                key={index}

                whileHover={{
                  y:-8,
                  scale:1.03,
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

        </div>

      </Reveal>

      {/* EDUCATION */}

      <div className="education-card">

        <p className="education-label">
          EDUCATION JOURNEY
        </p>

        <div className="education-timeline">

          <div className="education-step">

            <h3>
              AP Model High School
            </h3>

            <p>
              Phool Baugh, Vizianagaram
            </p>

            <span>
              6th Standard
            </span>

          </div>

          <div className="education-arrow">
            →
          </div>

          <div className="education-step">

            <h3>
              Vijnana Bharathi High School
            </h3>

            <p>
              Maharanipeta, Vizianagaram
            </p>

            <span>
              10th • 99%
            </span>

          </div>

          <div className="education-arrow">
            →
          </div>

          <div className="education-step">

            <h3>
              Apex Junior College
            </h3>

            <p>
              Vizianagaram
            </p>

            <span>
              Intermediate • 93.3%
            </span>

          </div>

          <div className="education-arrow">
            →
          </div>

          <div className="education-step">

            <h3>
              Lendi Institute of Engineering
            </h3>

            <p>
              B.Tech — ECE
            </p>

            <span>
              2023 — 2027 • CGPA 9.30
            </span>

          </div>

          <div className="education-arrow">
            →
          </div>

          <div className="education-step">

            <h3>
              Future Goals
            </h3>

            <p>
              AI Research, Embedded Innovation,
              Intelligent Systems & Futuristic Engineering
            </p>

            <span>
              Beyond 2027 🚀
            </span>

          </div>
        </div>

      </div>

    </section>
  )
}