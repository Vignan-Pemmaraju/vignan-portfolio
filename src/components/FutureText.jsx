import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export default function FutureText() {

  const texts = [
    "AI Engineer",
    "Embedded Systems Developer",
    "IoT Innovator",
    "Computer Vision Developer",
    "Futuristic Problem Solver",
  ]

  const [index, setIndex] = useState(0)

  useEffect(() => {

    const interval = setInterval(() => {

      setIndex((prev) => (prev + 1) % texts.length)

    }, 2500)

    return () => clearInterval(interval)

  }, [])

  return (

    <div className="future-text-wrapper">

      <AnimatePresence mode="wait">

        <motion.div
          key={texts[index]}

          initial={{
            opacity: 0,
            y: 20,
            filter: "blur(10px)",
          }}

          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}

          exit={{
            opacity: 0,
            y: -20,
            filter: "blur(10px)",
          }}

          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}

          className="future-text"
        >
          {texts[index]}
        </motion.div>

      </AnimatePresence>

    </div>
  )
}