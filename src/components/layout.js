import * as React from "react"
import Nav from "./Nav"

const Layout = ({ children, className }) => {
  return (
    <>
      <main className={`mx-auto px-10 bg-primary ${className}`}>
        {children}
      </main>
    </>
  )
}

export default Layout
