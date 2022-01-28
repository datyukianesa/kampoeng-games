import * as React from "react"
import Footer from "./Footer"
import Nav from "./Nav"
import Seo from "../components/seo"
import { GatsbySeo } from "gatsby-plugin-next-seo"

const Layout = ({ children, className }) => {
  return (
    <>
      <GatsbySeo noindex={false} />
      <Seo
        title="Home"
        description="Kampoeng Games merupakan sebuah website e-commerce yang berfokus untuk menjual game dan in-game voucher"
      ></Seo>
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
