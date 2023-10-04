import React, { useContext } from "react"
import ThemeContext from "../context/ThemeContext"
import { Link } from "gatsby"
import { useSiteMetadataQuery } from "../queries/useSiteMetadataQuery"

import LOGO from "../images/logo.inline.svg"

export const Header = () => {
  const { site } = useSiteMetadataQuery()
  const { navigationOpen, toggleNavigation } = useContext(ThemeContext)

  return (
    <header>
      <div className="container-fluid header-container">
        <div className="row row-cols-2 align-items-center">
          <div className="col">
            <Link to="/" aria-label="Homepage Link" className="logo-homepage-link">
              <LOGO />
              <h1 className="visually-hidden">{site.siteMetadata.title}</h1>
            </Link>
          </div>
          <div className="col text-end">
            <button
              className="menu-btn"
              onClick={() => toggleNavigation()}
              aria-haspopup="true"
              aria-expanded={navigationOpen}
            >
              Menu
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
