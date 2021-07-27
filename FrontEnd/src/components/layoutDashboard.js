import * as React from "react"
import Sidebar from "./Sidebar"

import Seo from "../components/seo"

const LayoutDashboard = ({ children, className }) => {
  return (
    <>
      <Seo title="Dashboard"></Seo>
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
