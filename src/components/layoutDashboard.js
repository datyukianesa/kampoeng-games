import * as React from "react"
// import Footer from "./Footer"
import Sidebar from "./Sidebar"

const LayoutDashboard = ({ children, className }) => {
  return (
    <>
      <div className={`bg-primary`}>
        <Sidebar />
        <main className={`container mx-auto px-10 ${className}`}>
          {children}
        </main>
        {/* <div className="bg-primary-darker">
          <Footer></Footer>
        </div> */}
      </div>
    </>
  )
}

export default LayoutDashboard
