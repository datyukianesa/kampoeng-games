import * as React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Logo from "./Logo"

import { useStaticQuery, graphql } from "gatsby"
const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div className="bg-primary text-secondary sticky top-0">
      <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
        <nav className="container flex">
          <div className="flex">
            <Logo className="w-10 h-10"></Logo>
          </div>
          <div className={`prose`}>
            <h1>{data.site.siteMetadata.title}</h1>
          </div>
          <div className="flex mt-4 sm:mt-0">
            <AnchorLink className="px-4" offset="100" href="#profile">
              Profile
            </AnchorLink>
            <AnchorLink className="px-4" offset="100" href="#about">
              Tentang Kami
            </AnchorLink>
            <AnchorLink className="px-4" offset="100" href="#team">
              Tim
            </AnchorLink>
            <AnchorLink className="px-4" offset="100" href="#services">
              Layanan dan Produk
            </AnchorLink>
            <AnchorLink className="px-4" offset="100" href="#contact">
              Kontak
            </AnchorLink>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Nav
