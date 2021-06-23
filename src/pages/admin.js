import React from "react"
import LayoutDashboard from "../components/layoutDashboard"
import { useRef } from "react"
import "@material-tailwind/react/tailwind.css"

export default function Admin() {
  const sidebarRef = useRef(null)

  return (
    <LayoutDashboard>
      <div className="h-screen flex items-center justify-center">
        <div className="text-dark font-bold text-2xl">Admin page Here</div>
      </div>
    </LayoutDashboard>
  )
}
