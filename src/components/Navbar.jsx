import {
  useState,
  useEffect,
} from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiMenu, FiX } from "react-icons/fi"

export default function Navbar(){

  const [menuOpen,setMenuOpen] =
    useState(false)

  const [isScrolled,setIsScrolled] =
    useState(false)

  useEffect(() => {

    const handleScroll = () => {

      if(window.scrollY > 120){
        setIsScrolled(true)
      }
      else{
        setIsScrolled(false)
      }
    }

    window.addEventListener(
      "scroll",
      handleScroll
    )

    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      )
    }

  },[])

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

    <motion.nav

      initial={{
        scale:1,
        y:0,
      }}

      animate={{
        scale:isScrolled ? 0.90 : 1,

        y:isScrolled ? -6 : 0,

        opacity:isScrolled ? 0.92 : 1,
      }}

      transition={{
        duration:0.55,

        ease:[0.22,1,0.36,1],
      }}

      whileHover={{
        scale:1,

        opacity:1,

        y:0,
      }}

      className="navbar"

      style={{
        position:"fixed",

        top:"18px",
        left:0,
        right:0,

        zIndex:9999,

        transformOrigin:
          "top center",
      }}
    >

      <div className="nav-logo">
        Vignan Pemmaraju
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

            style={{
              zIndex:99999,
            }}
          >

            {navLinks.map((link,index)=>( 
              <a

                key={index}

                href={link.href}

                onClick={() => {
                  setMenuOpen(false)

                  setTimeout(() => {
                    const target =
                      document.querySelector(link.href)

                    if(target){
                      target.scrollIntoView({
                        behavior:"smooth",
                      })
                    }
                  },100)
                }}
              >
                {link.name}
              </a>

            ))}

          </motion.div>

        )}

      </AnimatePresence>

    </motion.nav>

  )

}