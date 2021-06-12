import * as React from "react"
import { Link } from "gatsby"

const Button = ({ children, props }) => {
  return (
    <button>
      <Link to={props}></Link>
      {children}
    </button>
  )
}

export default Button
