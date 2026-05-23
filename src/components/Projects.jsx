import { useState } from "react"
import { motion } from "framer-motion"
import Reveal from "./Reveal"
import ProjectModal from "./ProjectModal"

export default function Projects() {
  const [selectedProject, setSelectedProject] =
    useState(null)

  const row1 = [

    {
      title: "Smart Water Tank System",

      tags: "IoT • Sensors • Automation",

      description:
        "A smart water management system designed for group houses where multiple tanks share a single motor. The system automates valve control and motor operation while allowing users to monitor and control everything remotely through a mobile application.",

      working:
        "The system uses water level sensors, automated valves and a controller to manage multiple tanks connected to a single motor. Based on tank levels, the system automatically switches valves, controls the motor and enables users to monitor and operate the complete system remotely using a mobile app.",

      features: [
        "Automatic Valve Switching",
        "Single Motor Multi-Tank Control",
        "Remote Mobile App Control",
        "Water Level Monitoring",
        "Automation System",
      ],

      tech: [
        "ESP32",
        "Ultrasonic Sensor",
        "IoT",
      ],
    },

    {
      title: "Smart Home Automation",

      tags: "IoT • ESP32 • Automation",

      description:
        "A smart automation system that allows users to control lights and appliances remotely using WiFi and embedded controllers.",

      working:
        "The system connects household appliances and lighting systems to ESP32-based controllers which communicate through WiFi. Users can remotely control devices, automate switching operations and monitor appliance states using a mobile interface.",

      features: [
        "Remote Appliance Control",
        "WiFi Connectivity",
        "Smart Switching",
        "Mobile App Integration",
        "Home Automation",
      ],

      tech: [
        "ESP32",
        "IoT",
        "WiFi",
      ],
    },

    {
      title: "Smart Plant Monitoring",

      tags: "IoT • Agriculture • Sensors",

      description:
        "A monitoring system that tracks soil moisture, temperature and environmental conditions to improve plant health automatically.",

      working:
        "The system continuously monitors soil moisture, temperature and environmental conditions using sensors connected to a controller. Based on the readings, users can monitor plant health and automate watering processes for better plant growth.",

      features: [
        "Soil Moisture Monitoring",
        "Temperature Detection",
        "Automated Irrigation",
        "Environmental Analysis",
        "Smart Agriculture",
      ],

      tech: [
        "IoT",
        "Sensors",
        "ESP32",
      ],
    },

    {
      title: "Driver Sleep Detection",

      tags: "AI • Computer Vision • Safety",

      description:
        "An intelligent driver safety system that detects drowsiness using computer vision techniques and alerts the driver in real time.",

      working:
        "The system uses computer vision algorithms and camera input to continuously monitor driver eye movement and facial behavior. When signs of drowsiness are detected, the system immediately triggers warning alerts to improve driving safety.",

      features: [
        "Driver Monitoring",
        "Drowsiness Detection",
        "Real-Time Alerts",
        "Computer Vision",
        "Safety Assistance",
      ],

      tech: [
        "Python",
        "OpenCV",
        "AI",
      ],
    },

  ]

  const row2 = [

    {
      title: "WiFi Controlled Car",

      tags: "Embedded Systems • IoT",

      description:
        "A wireless vehicle controlled through WiFi communication using embedded systems and mobile-based controls.",

      working:
        "The vehicle uses WiFi communication between a mobile device and an embedded controller to receive movement commands. Users can remotely navigate and control the vehicle wirelessly in real time.",

      features: [
        "Wireless Vehicle Control",
        "WiFi Communication",
        "Real-Time Navigation",
        "Embedded Motor Control",
        "Mobile Operation",
      ],

      tech: [
        "ESP32",
        "Embedded Systems",
        "IoT",
      ],
    },

    {
      title: "Terrain Aware Hybrid Vehicle",

      tags: "GNSS • AI • Route Optimization",

      description:
        "An intelligent hybrid vehicle system that analyzes terrain conditions and optimizes routes for better fuel efficiency and power management.",

      working:
        "The system combines GNSS data, terrain analysis and intelligent power management to optimize vehicle efficiency. It analyzes uphill and downhill conditions, adjusts power distribution between battery and fuel systems and recommends efficient routes.",

      features: [
        "Terrain Awareness",
        "GNSS Navigation",
        "Route Optimization",
        "Hybrid Power Management",
        "AI-Assisted Efficiency",
      ],

      tech: [
        "GNSS",
        "AI",
        "Embedded Systems",
      ],
    },

    {
      title: "Smart Food Court System",

      tags: "Web • Automation • Management",

      description:
        "A smart digital food court platform that manages orders, reservations and customer interactions efficiently.",

      working:
        "The platform manages food ordering, table reservations, customer interactions and administrative operations through a centralized digital system. Customers can place orders online while administrators manage menus, reservations and order status efficiently.",

      features: [
        "Online Food Ordering",
        "Table Reservation System",
        "Admin Dashboard",
        "Order Management",
        "Customer Interaction",
      ],

      tech: [
        "React",
        "Node.js",
        "MongoDB",
      ],
    },

    {
      title: "Mini IoT Projects",

      tags: "Embedded • Sensors • Innovation",

      description:
        "Built several mini IoT and automation prototypes focused on solving practical real-world problems using embedded systems.",

      working:
        "Developed multiple mini embedded and IoT prototypes using sensors, controllers and automation logic to solve practical day-to-day problems and improve system efficiency.",

      features: [
        "IoT Prototyping",
        "Sensor Integration",
        "Automation Systems",
        "Embedded Development",
        "Real-World Problem Solving",
      ],

      tech: [
        "ESP32",
        "Sensors",
        "Embedded Systems",
      ],
    },

  ]

  return (

    <section
      className="projects-section"
      id="projects"
    >

      <Reveal>

        <h2 className="section-title">
          Featured Projects
        </h2>

      </Reveal>

      {/* ROW 1 */}

      <div className="marquee">

        <motion.div

          animate={{
            x: ["0%", "-50%"],
          }}

          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}

          className="marquee-track"
        >

          {[...row1, ...row1].map((project, index) => (

            <div
              className="project-card"
              key={index}
              onClick={() =>
                setSelectedProject(project)
              }
            >

              <h3>
                {project.title}
              </h3>

              <span className="project-tags">
                {project.tags}
              </span>

              <p>
                {project.description}
              </p>

            </div>

          ))}

        </motion.div>

      </div>

      {/* ROW 2 */}

      <div className="marquee reverse">

        <motion.div

          animate={{
            x: ["-50%", "0%"],
          }}

          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}

          className="marquee-track"
        >

          {[...row2, ...row2].map((project, index) => (

            <div
              className="project-card"
              key={index}
              onClick={() =>
                setSelectedProject(project)
              }
            >

              <h3>
                {project.title}
              </h3>

              <span className="project-tags">
                {project.tags}
              </span>

              <p>
                {project.description}
              </p>

            </div>

          ))}

        </motion.div>

      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={() =>
          setSelectedProject(null)
        }
      />

    </section>
  )
}