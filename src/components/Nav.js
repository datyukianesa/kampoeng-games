import * as React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import LogoIcon from "../svg/LogoIcon"

const Nav = () => {
  return (
    <div className="bg-secondary text-white shadow sticky top-0 z-50">
      <nav className="container flex flex-col sm:flex-row justify-between mx-auto py-2 px-8">
        <div className="w-20 h-20 rounded-full bg-primary hover:bg-primary-lighter border-8 self-center border-secondary -my-5">
          <AnchorLink href="#home" offset="200">
            <LogoIcon className={`p-1`} />
          </AnchorLink>
        </div>
        <div>
          <div
            className={`flex flex-row text-center pt-5 text-secondary space-x-5`}
          >
            <AnchorLink
              href="#desc"
              offset="100"
              className={`flex-1 bg-primary rounded-lg hover:bg-primary-lighter`}
            >
              Deskripsi
            </AnchorLink>
            <AnchorLink
              href="#team"
              offset="100"
              className={`flex-1 bg-primary rounded-lg hover:bg-primary-lighter`}
            >
              Tim
            </AnchorLink>
            <AnchorLink
              href="#history"
              offset="100"
              className={`flex-1 bg-primary rounded-lg hover:bg-primary-lighter`}
            >
              Tentang
            </AnchorLink>
            <AnchorLink
              href="#products"
              offset="100"
              className={`flex-1 bg-primary rounded-lg hover:bg-primary-lighter`}
            >
              Produk
            </AnchorLink>
            <AnchorLink
              href="#vision"
              offset="100"
              className={`flex-1 bg-primary rounded-lg hover:bg-primary-lighter`}
            >
              <p className={`px-2`}>Visi dan Misi</p>
            </AnchorLink>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav
