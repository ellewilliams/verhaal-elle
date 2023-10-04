import * as React from "react"
import { Link } from "gatsby"
import logo from "../images/Verhaal_Logo.png"
import Layout from "../components/layout"


// markup
const NotFoundPage = () => {
  return (
    <Layout className="error404">
      <div className="container-fluid">
        <title>Not found</title>
        <h1>Page not found</h1>
        <p>
          We couldn’t find what you were looking for.
          <br /><br />
          <Link to="/">Back to home page</Link>
        </p>
      </div>
    </Layout>
  )
}

export default NotFoundPage
