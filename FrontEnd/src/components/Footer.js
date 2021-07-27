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
        <div className={`pt-20 pb-14 flex-1 text-right `}>
          <Heading className={`text-secondary`}>Important Links</Heading>
          <ul className="text-secondary-lighter">
            <li>
              <AnchorLink href="#desc" offset="100">
                <Paragraph>Products</Paragraph>
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#team" offset="100">
                <Paragraph>Tim</Paragraph>
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#history" offset="100">
                <Paragraph>History</Paragraph>
              </AnchorLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
