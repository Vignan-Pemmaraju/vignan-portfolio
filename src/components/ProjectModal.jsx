import { motion, AnimatePresence } from "framer-motion"

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}) {

  return (

    <AnimatePresence>

      {isOpen && (

        <motion.div

          initial={{ opacity: 0 }}

          animate={{ opacity: 1 }}

          exit={{ opacity: 0 }}

          className="modal-overlay"

          onClick={onClose}
        >

          <motion.div

            initial={{
              opacity: 0,
              scale: 0.8,
              y: 80,
            }}

            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}

            exit={{
              opacity: 0,
              scale: 0.8,
              y: 80,
            }}

            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}

            className="project-modal"

            onClick={(e) => e.stopPropagation()}
          >

            {/* CLOSE BUTTON */}

            <button
              className="modal-close"
              onClick={onClose}
            >
              ✕
            </button>

            {/* TITLE */}

            <h2 className="modal-title">
              {project?.title}
            </h2>

            {/* DESCRIPTION */}

            <p className="modal-description">
              {project?.description}
            </p>

            {/* HOW IT WORKS */}

            {project?.working && (

              <div className="modal-section">

                <h3>
                  How It Works
                </h3>

                <p>
                  {project.working}
                </p>

              </div>

            )}

            {/* FEATURES */}

            {project?.features && (

              <div className="modal-section">

                <h3>
                  Key Features
                </h3>

                <div className="feature-grid">

                  {project.features.map((feature, index) => (

                    <div
                      key={index}
                      className="feature-pill"
                    >
                      {feature}
                    </div>

                  ))}

                </div>

              </div>

            )}

            {/* TECH STACK */}

            <div className="tech-stack">

              {project?.tech?.map((item, index) => (

                <span
                  key={index}
                  className="tech-pill"
                >
                  {item}
                </span>

              ))}

            </div>

            {/* BUTTONS */}

            <div className="modal-buttons">

              {project?.github && (

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-button"
                >
                  GitHub
                </a>

              )}

              {project?.demo && (

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-button secondary"
                >
                  Live Demo
                </a>

              )}

            </div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  )
}