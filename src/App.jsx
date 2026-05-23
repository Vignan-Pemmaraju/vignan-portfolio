import { useEffect, useState } from "react"
import Lenis from "lenis"
import Loader from "./components/Loader"
import { AnimatePresence } from "framer-motion"
import BackgroundEffects from "./components/BackgroundEffects"
import CustomCursor from "./components/CustomCursor"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Skills from "./components/Skills"
import Timeline from "./components/Timeline"
import Spotlight from "./components/Spotlight"
import About from "./components/About"
function App() {

  const [loading, setLoading] = useState(true)
  useEffect(() => {

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    })

    let frameId

    function raf(time) {
      lenis.raf(time)
      frameId = requestAnimationFrame(raf)
    }

    frameId = requestAnimationFrame(raf)
    const timer = setTimeout(() => {
    setLoading(false)
    }, 2800)
    return () => {
      clearTimeout(timer)
      cancelAnimationFrame(frameId)
      lenis.destroy()
    }

  }, [])

  return (

    <AnimatePresence>

      {loading ? (

        <Loader />

      ) : (

        <div className="relative overflow-hidden">

          <CustomCursor />

          <BackgroundEffects />

          <Spotlight />

          <Navbar />

          <main className="relative z-10">

           <Hero />

<About />

<Projects />

<Skills />

<Timeline />

<Contact />
          </main>

        </div>

      )}

    </AnimatePresence>
  )
}

export default App