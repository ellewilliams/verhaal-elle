import { useEffect } from "react"
import LocomotiveScroll from "locomotive-scroll"

interface scrollProps {
  // Locomotive Scroll
  // https://github.com/locomotivemtl/locomotive-scroll#instance-options
  callbacks: Location | boolean
  container: string
  instanceOptions: {
    smooth: boolean
    smoothMobile: boolean
    getDirection: boolean
    touchMultiplier: number
    lerp: number
    direction: string
    gestureDirection: string
  }
}

const Scroll = (props: scrollProps) => {
  const { callbacks } = props

  useEffect(() => {
    let locomotiveScroll: typeof LocomotiveScroll
    locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector(props.container),
      ...props.instanceOptions,
    })

    setTimeout(() => {
      locomotiveScroll.update()
    }, 300) // Hack for footer being clipped.

    // Exposing to the global scope for ease of use.
    window.scroll = locomotiveScroll

    locomotiveScroll.on("scroll", (func: any) => {
      // Update `data-direction` with scroll direction.
      document.documentElement.setAttribute("data-direction", func.direction)
    })

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy()
    }
  }, [callbacks])

  return null
}

export default Scroll
