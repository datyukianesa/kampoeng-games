import * as React from "react"
import { Link } from "gatsby"

const Button = ({ children, to, className }) => {
  return <button className={` ${className}`}>{children}</button>
}

export default Button
