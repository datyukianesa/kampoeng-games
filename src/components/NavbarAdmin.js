import React from "react"
import { useState } from "react"
import Navbar from "@material-tailwind/react/Navbar"
import NavbarContainer from "@material-tailwind/react/NavbarContainer"
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper"
import NavbarBrand from "@material-tailwind/react/NavbarBrand"
import NavbarToggler from "@material-tailwind/react/NavbarToggler"
import NavbarCollapse from "@material-tailwind/react/NavbarCollapse"
import NavItem from "@material-tailwind/react/NavItem"
import Nav from "@material-tailwind/react/Nav"
import NavLink from "@material-tailwind/react/NavLink"
import Icon from "@material-tailwind/react/Icon"
import "@material-tailwind/react/tailwind.css"

export default function LayoutAdmin() {
  const [openNavbar, setOpenNavbar] = useState(false)

  return (
    <Navbar color="lightBlue" navbar>
      <NavbarContainer>
        <NavbarWrapper>
          <NavbarToggler
            color="white"
            onClick={() => setOpenNavbar(!openNavbar)}
            ripple="light"
          />
          {/* <span class="material-icons md-32 text-white">menu</span> */}
          <NavbarBrand>Navbar</NavbarBrand>
        </NavbarWrapper>

        {/* <NavbarCollapse open={openNavbar}>
          <Nav>
            <NavItem active="light" ripple="light">
              <Icon name="language" size="xl" />
              Lorem
            </NavItem>
            <NavLink href="#navbar" ripple="light">
              <Icon name="account_circle" size="xl" />
              Lorem
            </NavLink>
            <NavItem ripple="light">
              <Icon name="settings" size="xl" />
              Lorem
            </NavItem>
          </Nav>
        </NavbarCollapse> */}
      </NavbarContainer>
    </Navbar>
  )
}
