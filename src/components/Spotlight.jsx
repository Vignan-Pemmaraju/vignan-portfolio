import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Spotlight() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {

    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", move)

    return () => {
      window.removeEventListener("mousemove", move)
    }

  }, [])

  return (

    <motion.div

      animate={{
        x: position.x - 250,
        y: position.y - 250,
      }}

      transition={{
        type: "spring",
        damping: 40,
        stiffness: 120,
      }}

      className="
        fixed
        top-0
        left-0
        w-[500px]
        h-[500px]
        rounded-full
        pointer-events-none
        z-0
        opacity-40
      "

      style={{
        background:
          "radial-gradient(circle, rgba(34,211,238,0.15), transparent 70%)",
        filter: "blur(60px)",
      }}
    />

  )
}