import * as React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import LogoIcon from "../svg/LogoIcon"

const Nav = () => {
  return (
    <div className="bg-secondary text-white shadow sticky top-0">
      <nav className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-2 px-8">
        <div className="w-20 h-20 rounded-full bg-primary border-8 border-secondary -my-5">
          <AnchorLink href="#home" offset="100">
            <LogoIcon className={`p-1`} />
          </AnchorLink>
        </div>
      </nav>
    </div>
  )
}

export default Nav
