import { motion } from "framer-motion"
import Reveal from "./Reveal"
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa"

import {
  MdEmail,
} from "react-icons/md"
export default function Contact() {

  const socials = [

    {
      title: "GitHub",
      value: "Vignan-Pemmaraju",
      link:
        "https://github.com/Vignan-Pemmaraju",
      icon: <FaGithub />,
    },

    {
      title: "LinkedIn",
      value: "Venkata Vignan Pemmaraju",
      link:
        "https://www.linkedin.com/in/venkata-vignan-pemmaraju-97b717303/",
      icon: <FaLinkedin />,
    },

    {
      title: "Email",
      value:
        "Vignan Pemmaraju",
      link:
        "mailto:vignanpemmaraju20@gmail.com",
      icon: <MdEmail />,
    },

  ]

  return (

    <section
      id="contact"
      className="contact-section"
    >

      <Reveal>

        <div className="contact-header">

          <p className="contact-tag">
            CONTACT
          </p>

          <h2 className="contact-title">
            Let’s Build
            Something Amazing.
          </h2>

          <p className="contact-description">

            Interested in collaborating,
            building futuristic systems,
            or discussing innovative ideas?

            Let’s connect.

          </p>

        </div>

      </Reveal>

      {/* SOCIAL CARDS */}

      <div className="contact-grid">

        {socials.map((item, index) => (

          <Reveal key={index}>

            <motion.a

              href={item.link}
              target="_blank"
              rel="noopener noreferrer"

              whileHover={{
                y: -8,
                scale: 1.03,
              }}

              transition={{
                type: "spring",
                stiffness: 200,
              }}

              className="contact-card"
            >

              <div className="contact-glow"></div>

              <div className="contact-bg-icon">
                {item.icon}
              </div>

              

              <h3>
                {item.title}
              </h3>

              <p>
                {item.value}
              </p>

            </motion.a>

          </Reveal>

        ))}

      </div>

    </section>
  )
}