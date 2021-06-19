import * as React from "react"
import { Link } from "gatsby"

const Button = ({ children, to, className }) => {
  return (
    <Link to={to}>
      <button className={`border-2 border-white text-white p-5 ${className}`}>
        {children}
      </button>
    </Link>
  )
}

export default Button
