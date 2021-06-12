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
      <div>
        <AnchorLink href="#profile">Profile</AnchorLink>
        <AnchorLink href="#about">Temtamg Kami</AnchorLink>
        <AnchorLink href="#team">Tim</AnchorLink>
        <AnchorLink href="#services">Layanan dan Produk</AnchorLink>
        <AnchorLink href="#contact">Kontak</AnchorLink>
      </div>
    </nav>
  )
}

export default Nav
