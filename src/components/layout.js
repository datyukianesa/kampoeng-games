import * as React from "react"
import Footer from "./Footer"
import Nav from "./Nav"
import Seo from "../components/seo"

const Layout = ({ children, className }) => {
  return (
    <>
      <Seo title="Home"></Seo>
      <div className={`bg-primary`}>
        <Nav></Nav>
        <main className={`container mx-auto px-10 ${className}`}>
          {children}
        </main>
        <div className="bg-primary bg-gradient-to-t from-primary-darker ">
          <Footer></Footer>
        </div>
      </div>
    </>
  )
}

export default Layout
