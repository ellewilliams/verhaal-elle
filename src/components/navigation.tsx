import React, { useContext, useEffect } from "react"
import ThemeContext from "../context/ThemeContext"
import { navigate } from "gatsby"
import { useSiteSettingsQuery } from "../queries/useSiteSettingsQuery"
import mapboxgl from "!mapbox-gl"
import { useKeyPress } from "../hooks/useKeyPress"
import instaGram from "../images/insta-icon.svg"
import faceBook from "../images/facebook-icon.svg"

export const Navigation = () => {
  const { toggleNavigation, navigationOpen } = useContext(ThemeContext)
  const { sanitySiteSettings } = useSiteSettingsQuery()
  const { email, number, address, instagramUrl, facebookUrl } = sanitySiteSettings
  const escapePress: boolean = useKeyPress("Escape")

  escapePress && toggleNavigation()

  // useEffect(() => {
  //   mapboxgl.accessToken = "pk.eyJ1IjoidmVyaGFhbCIsImEiOiJja3I0Zmd2OXMwNXZnMnBxbGJvejA2bm03In0.7-dyN5uIhFGQEp-c_z9w_Q"
  //   const map = new mapboxgl.Map({
  //     container: "map-navigation", // container id
  //     style: "mapbox://styles/verhaal/ckr4fk39d0eld17r9r7d70suv", // style URL
  //     center: [80, 9], // starting position [lng, lat]
  //     zoom: 0.3, // starting zoom
  //     pitch: 0,
  //   })
  // }, [])

  return (
    <nav className={`menu ${navigationOpen ? "" : "menu--closed"}`}>
      <div className="menu-wrapper mx-auto">
        <div className="container-fluid">
          <div className="row justify-content-end">
            <div className="col-12 col-sm-12 col-md-4 text-end">
              <button onClick={() => toggleNavigation()} className="menu-btn-close">
                Close
              </button>
              <ul className="menu-items text-start">
                <li>
                  <button
                    onClick={() => {
                      toggleNavigation()
                      navigate("/projects")
                    }}
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      toggleNavigation()
                      navigate("/about")
                    }}
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      toggleNavigation()
                      navigate("/artists")
                    }}
                  >
                    Artists
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      toggleNavigation()
                      navigate("/featured")
                    }}
                  >
                    Featured
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      toggleNavigation()
                      navigate("/contact")
                    }}
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="row justify-content-md-end">
            <div className="col-12 col-sm-12 col-md-4">
              <p className="locations">
                Sydney | Dubai
              </p>
              <p className="email mb-0">
                <a href={`mailto:${email}`} aria-label="Email Verhaal">
                  {email}
                </a>
              </p>
              <p className="phone-number">
                <a href={`tel:${number}`} aria-label="Call Verhaal">
                  {number}
                </a>
              </p>
            </div>
          </div>
          <div className="row justify-content-md-end">
            <div className="col-12 col-sm-12 col-md-4">
              {/* <div id="map-navigation" className="map" style={{ height: 240 }} /> */}
              {/* <p className="address">{address}</p> */}
            </div>
          </div>
          <div className="row justify-content-md-end">
            <div className="col-9 col-md-4">
              <a href={facebookUrl} target="_blank" rel="noreferrer" aria-label="Visit us on Facebook">
                <img src={faceBook} alt="Facebook" className="socials" height={19} />
              </a>
              <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Visit us on Instagram">
                <img src={instaGram} alt="Instagram" className="socials" height={19} />
              </a>
            </div>
          </div>
          <div className="row justify-content-md-end">
            <div className="col-9 col-md-4">
              <p className="copyright">
                &copy; {new Date().getFullYear()} Verhaal.
                <br></br>
                Brand by{" "}
                <a href="https://ellewilliams.com" target="_blank" rel="noreferrer">
                  Elle Williams Studio
                </a>
                .<br></br>
                Website by{" "}
                <a href="https://ellewilliams.com" target="_blank" rel="noreferrer">
                  Elle Williams Studio
                </a>{" "}
                &{" "}
                <a href="https://srrycmpny.com" target="_blank" rel="noreferrer">
                  Sorry Company
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
