import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Logo = ({ className }) => {
  return (
    <StaticImage
      alt="Kampoeng Games"
      src="../svg/logo.svg"
      className={`${className}`}
    ></StaticImage>
  )
}

export default Logo
