import * as React from "react"
import Heading from "./Heading"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Paragraph from "./Paragraph"

const Footer = () => {
  return (
    <footer className={``}>
      <div className={`px-10 items-center flex flex-row lg:px-20`}>
        <div className={`pt-20 pb-14 flex-1`}>
          <Paragraph className={`pt-20 text-secondary`}>
            Kampoeng Games®
          </Paragraph>
        </div>

        <div className={`pt-20 pb-14 flex-1 text-right `}>
          {/* <Heading className={`text-secondary`}>Important Links</Heading>
          <ul>
            <li>
              <AnchorLink href="#desc" offset="100">
                <Paragraph className={`text-complementary-lighter`}>
                  Products
                </Paragraph>
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#team" offset="100">
                <Paragraph className={`text-complementary-lighter`}>
                  Tim
                </Paragraph>
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#history" offset="100">
                <Paragraph className={`text-complementary-lighter`}>
                  History
                </Paragraph>
              </AnchorLink>
            </li>
          </ul> */}
        </div>
      </div>
      {/* <div className={`flex`}>
        <p className={`bg-gatsby flex-1 text-center`}>Made with Gatsby</p>
      </div> */}
    </footer>
  )
}

export default Footer
