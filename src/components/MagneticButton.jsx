import { motion } from "framer-motion"
import { useRef } from "react"

export default function MagneticButton({
  children,
  onClick,
}) {

  const ref = useRef(null)

  const handleMouseMove = (e) => {

    const element = ref.current

    const rect = element.getBoundingClientRect()

    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    element.style.transform =
      `translate(${x * 0.2}px, ${y * 0.2}px)`
  }

  const resetPosition = () => {
    ref.current.style.transform = `translate(0px,0px)`
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetPosition}
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      className="
        px-8
        py-4
        rounded-2xl
        bg-gradient-to-r
        from-cyan-500
        to-blue-500
        text-white
        font-semibold
        transition-all
        duration-300
        shadow-[0_0_40px_rgba(34,211,238,0.4)]
        hover:shadow-[0_0_80px_rgba(34,211,238,0.7)]
      "
    >
      {children}
    </motion.button>
  )
}