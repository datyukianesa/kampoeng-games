import * as React from "react"
import Sidebar from "./Sidebar"

const LayoutDashboard = ({ children, className }) => {
  return (
    <>
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
