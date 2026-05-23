import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiMenu, FiX } from "react-icons/fi"

export default function Navbar(){

  const [menuOpen,setMenuOpen] =
    useState(false)

  const navLinks = [

    {
      name:"Home",
      href:"#home",
    },

    {
      name:"About",
      href:"#about",
    },

    {
      name:"Skills",
      href:"#skills",
    },

    {
      name:"Projects",
      href:"#projects",
    },

    {
      name:"Contact",
      href:"#contact",
    },

  ]

  return(

    <nav className="navbar">

      <div className="nav-logo">
        VIGNAN
      </div>

      {/* DESKTOP NAV */}

      <div className="nav-links desktop-nav">

        {navLinks.map((link,index)=>(

          <a
            key={index}
            href={link.href}
          >
            {link.name}
          </a>

        ))}

      </div>

      {/* MOBILE MENU BUTTON */}

      <button

        className="mobile-menu-btn"

        onClick={() =>
          setMenuOpen(!menuOpen)
        }
      >

        {menuOpen
          ? <FiX />
          : <FiMenu />
        }

      </button>

      {/* MOBILE MENU */}

      <AnimatePresence>

        {menuOpen && (

          <motion.div

            initial={{
              opacity:0,
              y:-20,
            }}

            animate={{
              opacity:1,
              y:0,
            }}

            exit={{
              opacity:0,
              y:-20,
            }}

            transition={{
              duration:0.3,
            }}

            className="mobile-nav"
          >

            {navLinks.map((link,index)=>(

              <a

                key={index}

                href={link.href}

                onClick={() =>
                  setMenuOpen(false)
                }
              >
                {link.name}
              </a>

            ))}

          </motion.div>

        )}

      </AnimatePresence>

    </nav>

  )

}