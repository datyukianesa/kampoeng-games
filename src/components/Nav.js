import * as React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"

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
    <nav className="sticky top-0">
      <div>
        <h1>{data.site.siteMetadata.title}</h1>
      </div>
      <div className="flex">
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
  )
}

export default Nav
