import * as React from "react"
import { Link } from "gatsby"

const Button = ({ children, to, className }) => {
  return (
    <Link to={to}>
      <button className={` ${className}`}>{children}</button>
    </Link>
  )
}

export default Button
