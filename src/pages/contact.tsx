import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useSiteSettingsQuery } from "../queries/useSiteSettingsQuery"
import { useEffect } from "react"
import instaGram from "../images/insta-icon-reverse.svg"
import faceBook from "../images/facebook-icon-reverse.svg"

const ContactPage = () => {
  const { sanitySiteSettings } = useSiteSettingsQuery()
  const { email, number, address, location, instagramUrl, facebookUrl } = sanitySiteSettings

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
            <p className="email">
							<div className="small-text">Email</div>
              <a href={`mailto:${email}`}>{email}</a>
            </p>
						<h2 className="mt-5">DUBAI</h2>
            <p className="phone-number">
							<div className="small-text">Address</div>
              {number}
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
