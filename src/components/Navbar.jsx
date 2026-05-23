import { motion } from "framer-motion"

export default function Navbar() {

  return (

    <motion.nav

      initial={{
        y: -100,
        opacity: 0,
      }}

      animate={{
        y: 0,
        opacity: 1,
      }}

      transition={{
        duration: 1,
      }}

      className="navbar"
    >

      <div className="nav-logo">
        Vignan
      </div>

      <div className="nav-links">

  <a href="#home">
    <span>Home</span>
  </a>

  <a href="#about">
  <span>About Me</span>
</a>

<a href="#skills">
  <span>Skills</span>
</a>

<a href="#contact">
  <span>Contact</span>
</a>

</div>

    </motion.nav>

  )
}