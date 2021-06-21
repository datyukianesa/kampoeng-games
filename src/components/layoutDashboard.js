import * as React from "react"
import Sidebar from "./Sidebar"
import { Helmet } from "react-helmet"

const LayoutDashboard = ({ children, className }) => {
  return (
    <>
      <Helmet>
        <title>Kampoeng Games</title>
      </Helmet>
      <Sidebar />
      <div className={`bg-primary md:ml-64`}>
        <main className={`container mx-auto px-10 ${className}`}>
          {children}
        </main>
      </div>
    </>
  )
}

export default LayoutDashboard
