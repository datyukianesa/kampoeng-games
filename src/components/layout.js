import * as React from "react"
import Nav from "./Nav"

const Layout = ({ children }) => {
  return (
    <>
      <Nav></Nav>
      <main className="container px-10">{children}</main>
    </>
  )
}

export default Layout
