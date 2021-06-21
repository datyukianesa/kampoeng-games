import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"

const Img1 = () => {
  return (
    <StaticImage
      className="xl:w-1/2 xl:ml-32"
      loading="eager"
      src="../images/img1.png"
      alt="Games"
    ></StaticImage>
  )
}

export default Img1
