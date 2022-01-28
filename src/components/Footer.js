import * as React from "react"
import Heading from "./Heading"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Paragraph from "./Paragraph"

import HeroImage from "../svg/HeroImage"

const Footer = () => {
  return (
    <footer className={``}>
      <div className={`px-10 items-center flex flex-row lg:px-20`}>
        <div className={`pt-20 pb-14 flex-1`}>
          <Paragraph className={`pt-20 text-secondary`}>
            Kampoeng Games®
          </Paragraph>
        </div>
        <div className={`mx-auto w-32 h-32`}>
          <HeroImage></HeroImage>
        </div>
      </div>
    </footer>
  )
}

export default Footer
