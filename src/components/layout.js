import * as React from "react"
import Footer from "./Footer"
import Nav from "./Nav"

const Layout = ({ children, className }) => {
  return (
    <>
      <div className={`bg-primary`}>
        <Nav></Nav>
        <main className={`container mx-auto px-10 ${className}`}>
          {children}
        </main>
        <div className="bg-secondary-lighter block">
          <Footer></Footer>
        </div>
      </div>
    </>
  )
}

export default Layout
