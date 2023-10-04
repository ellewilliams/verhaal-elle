import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useSiteSettingsQuery } from "../queries/useSiteSettingsQuery"
import mapboxgl from "!mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"
import { useEffect } from "react"
import instaGram from "../images/insta-icon-reverse.svg"
import faceBook from "../images/facebook-icon-reverse.svg"

const ContactPage = () => {
  const { sanitySiteSettings } = useSiteSettingsQuery()
  const { email, number, address, instagramUrl, facebookUrl } = sanitySiteSettings

  useEffect(() => {
    mapboxgl.accessToken = "pk.eyJ1IjoidmVyaGFhbCIsImEiOiJja3I0Zmd2OXMwNXZnMnBxbGJvejA2bm03In0.7-dyN5uIhFGQEp-c_z9w_Q"
    const map = new mapboxgl.Map({
      container: "map-contact", // container id
      style: "mapbox://styles/verhaal/ckr4fk39d0eld17r9r7d70suv", // style URL
      center: [80, 9], // starting position [lng, lat]
      zoom: 0.3, // starting zoom
      pitch: 0,
    })
  }, [])

  return (
    <Layout className="contact">
      <SEO title="Contact" />
      <div className="container-fluid container-contact">
        <div className="row align-items-center justify-content-center">
          <div className="col-10 col-md-8 col-lg-6">
            <h1 className="heading text-center animate-heading">Get in touch</h1>
          </div>
        </div>
        <div className="row align-items-center justify-content-center">
          <div className="col-10 col-md-8 col-lg-6">
            <div className="divider" />
          </div>
        </div>
        <div className="row align-items-center justify-content-center">
          <div className="col-10 col-md-8 col-lg-6 text-center">
          <p className="locations">
              Sydney | Dubai
            </p>
            <p className="email mb-0">
              <a href={`mailto:${email}`}>{email}</a>
            </p>
            <p className="phone-number">
              <a href={`tel:${number}`}>{number}</a>
            </p>
            {/* <p className="address">{address}</p>
            <p className="directions">
              <a
                href="https://www.google.com/maps/place/Verhaal/@-33.8580953,151.1847017,15z/data=!4m2!3m1!1s0x0:0xf2599cd356dbe5e8?sa=X&ved=2ahUKEwiSptmq3r_zAhXW8XMBHSw-C_8Q_BJ6BAhhEAU"
                target="_blank"
              >
                Get directions
              </a>
            </p> */}
          </div>
        </div>
        <div className="row align-items-center justify-content-center">
          <div className="col-10 col-md-6 col-xl-4 text-center">
            <div id="map-contact" className="map" style={{ height: 240 }} />
          </div>
        </div>
        <div className="row align-items-center justify-content-center">
          <div className="col-10 col-md-8 col-lg-6 text-center">
            <a href={facebookUrl} target="_blank" rel="noreferrer" aria-label="Visit us on Facebook">
              <img src={faceBook} alt="Facebook" className="socials" height={19} />
            </a>
            <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Visit us on Instagram">
              <img src={instaGram} alt="Instagram" className="socials" height={19} />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
