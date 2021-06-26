import * as React from "react"
import Footer from "./Footer"
import Nav from "./Nav"

import { Helmet } from "react-helmet"

const Layout = ({ children, className }) => {
  return (
    <>
      <Helmet>
        <title>Kampoeng Games</title>
      </Helmet>
      <div className={`bg-primary`}>
        <Nav></Nav>
        <main className={`container mx-auto px-10 ${className}`}>
          {children}
        </main>
        <div className="bg-primary-darker">
          <Footer></Footer>
        </div>
      </div>
    </>
  )
}

export default Layout
