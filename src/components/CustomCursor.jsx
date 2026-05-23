import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()

    window.addEventListener("resize", checkMobile)

    const mouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
      window.removeEventListener("resize", checkMobile)
    }

  }, [])

  if (isMobile) return null

  return (

    <motion.div
      animate={{
        x: position.x - 40,
        y: position.y - 40,
      }}

      transition={{
        type: "spring",
        damping: 30,
        stiffness: 300,
      }}

      className="
        fixed
        top-0
        left-0
        w-[80px]
        h-[80px]
        rounded-full
        pointer-events-none
        z-[9999]
        bg-cyan-400/20
        blur-2xl
      "
    />

  )
}