import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect } from "react"

export default function ParallaxLayer({
  children,
  speed = 30,
}) {

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const smoothX = useSpring(x, {
    stiffness: 50,
    damping: 20,
  })

  const smoothY = useSpring(y, {
    stiffness: 50,
    damping: 20,
  })

  useEffect(() => {

    const move = (e) => {

      const xPos =
        (window.innerWidth / 2 - e.clientX) / speed

      const yPos =
        (window.innerHeight / 2 - e.clientY) / speed

      x.set(xPos)
      y.set(yPos)
    }

    window.addEventListener("mousemove", move)

    return () => {
      window.removeEventListener("mousemove", move)
    }

  }, [speed, x, y])

  return (

    <motion.div
      style={{
        x: smoothX,
        y: smoothY,
      }}
    >
      {children}
    </motion.div>

  )
}