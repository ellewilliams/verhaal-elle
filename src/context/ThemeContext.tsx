import React, { ReactNode, createContext, useEffect, useState } from "react"

interface DefaultStateProps {
  themeDark: boolean
  navigationOpen: boolean
  toggleDark: () => void
  toggleNavigation: (delay?: number) => void
  overflow: boolean
}

const defaultState = {
  themeDark: false,
  toggleDark: () => {},
  navigationOpen: false,
  toggleNavigation: (delay?: number) => {},
  overflow: false
}

const ThemeContext = createContext<DefaultStateProps>(defaultState)
// Getting dark mode information from OS!
// You need macOS Mojave + Safari Technology Preview Release 68 to test this currently.
const supportsDarkMode = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches === true

interface ThemeProviderProps {
  children: ReactNode
}

const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props
  const [themeDark, setThemeDark] = useState<boolean>(false)
  const [overflow, setOverflow] = useState<boolean>(false)
  const [navigationOpen, setNavigationOpen] = useState<boolean>(false)

  useEffect(() => {
    // Getting dark mode value from localStorage!
    const lsDark = JSON.parse(localStorage.getItem("dark")!)

    if (lsDark) {
      setThemeDark(true)
    } else if (supportsDarkMode()) {
      setThemeDark(true)
    }
  }, [])

  const toggleDark = () => {
    let dark = !themeDark
    localStorage.setItem("dark", JSON.stringify(dark))
    setThemeDark(dark)
  }

  const toggleNavigation = (delay?: number) => {
    let open = !navigationOpen
    const timer = setTimeout(() => {
      setOverflow(open)
      setNavigationOpen(open)
    }, 0)
    return () => clearTimeout(timer)
  }

  return (
    <ThemeContext.Provider
        value={{
        themeDark,
        toggleDark: toggleDark,
        navigationOpen,
        toggleNavigation: toggleNavigation,
        overflow,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext

export { ThemeProvider }
