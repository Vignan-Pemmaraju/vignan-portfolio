import { motion } from "framer-motion"

export default function Loader() {

  return (

    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: {
          duration: 1,
        },
      }}
      className="loader-screen"
    >

      {/* BACKGROUND GLOW */}
      <div className="loader-glow"></div>

      {/* CENTER CONTENT */}
      <div className="loader-content">

        <motion.h1
          initial={{
            opacity: 0,
            scale: 0.8,
            letterSpacing: "0px",
          }}

          animate={{
            opacity: 1,
            scale: 1,
            letterSpacing: "10px",
          }}

          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}

          className="loader-title"
        >
          VIGNAN
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="loader-subtitle"
        >
          INITIALIZING PORTFOLIO SYSTEM
        </motion.p>

        {/* LOADING BAR */}

        <div className="loader-bar">

          <motion.div
            initial={{
              width: "0%",
            }}

            animate={{
              width: "100%",
            }}

            transition={{
              duration: 2.4,
              ease: "easeInOut",
            }}

            className="loader-progress"
          />

        </div>

      </div>

    </motion.div>
  )
}