import React, { ReactNode, useContext, useEffect } from "react"
import ThemeContext from "../context/ThemeContext"
import { gsap, Expo } from "gsap"
import { Header } from "../components/header"
import { Navigation } from "../components/navigation"
import "../styles/index.scss"
import "slick-carousel/slick/slick.css"

interface LayoutProps {
  children: ReactNode
  className: string
}

export default function Layout(props: LayoutProps) {
  const { children, className } = props
  const { navigationOpen, overflow } = useContext(ThemeContext)

  useEffect(() => {
    gsap.to(".main", {
      duration: 1.3,
      delay: 0.6,
      autoAlpha: 1,
      opacity: 1,
      ease: Expo.easeInOut,
    })
  }, [])

  return (
    <div style={{ overflow: 'hidden' }}>
      <Navigation />
      <div className={`container-scope-${className} content-wrapper ${navigationOpen ? "menu--open" : ""}`}>
        <Header />
        <main id="main" className="main">{children}</main>
      </div>
    </div>
  )
}
