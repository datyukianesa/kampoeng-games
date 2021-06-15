import * as React from "react"
import Nav from "./Nav"

const Layout = ({ children }) => {
  return (
    <>
      <Nav></Nav>
      <main>{children}</main>
    </>
  )
}

export default Layout
