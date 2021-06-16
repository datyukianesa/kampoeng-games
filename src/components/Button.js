import * as React from "react"
import { Link } from "gatsby"

const Button = ({ children, to }) => {
  return (
    <button className={`bg-primary text-secondary`}>
      <Link to={to}></Link>
      {children}
    </button>
  )
}

export default Button
