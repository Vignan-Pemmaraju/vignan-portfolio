import { motion, useMotionValue } from "framer-motion"

export default function FutureCard({
  title,
  description,
}) {

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove(e) {

    const rect =
      e.currentTarget.getBoundingClientRect()

    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  return (

    <motion.div

      onMouseMove={handleMouseMove}

      whileHover={{
        rotateX: 6,
        rotateY: -6,
        scale: 1.02,
      }}

      transition={{
        type: "spring",
        stiffness: 200,
        damping: 15,
      }}

      className="future-card"
    >

      {/* INTERACTIVE LIGHT */}

      <motion.div
        className="card-spotlight"

        style={{
          background: `
            radial-gradient(
              250px circle at
              ${mouseX.get()}px
              ${mouseY.get()}px,
              rgba(34,211,238,0.18),
              transparent 80%
            )
          `,
        }}
      />

      {/* CONTENT */}

      <div className="future-card-content">

        <div className="future-icon">
          ✦
        </div>

        <h3 className="future-title">
          {title}
        </h3>

        <p className="future-description">
          {description}
        </p>

      </div>

    </motion.div>

  )
}