import * as React from "react"
import { useState } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import LogoIcon from "../../svg/LogoIcon"
import NavbarContainer from "@material-tailwind/react/NavbarContainer"
import { NavItem } from "./NavItem"
import Button from "@material-tailwind/react/Button"

const Nav = () => {
  const [openNavbar, setOpenNavbar] = useState(false)

  return (
    <div className="bg-secondary text-white shadow sticky top-0 z-50">
      <NavbarContainer className="flex flex-row justify-between mx-auto py-2">
        <div className="w-20 h-20 rounded-full bg-primary hover:bg-primary-lighter border-8 self-center border-secondary -my-5">
          <AnchorLink href="#home" offset="200">
            <LogoIcon className={`p-1`} />
          </AnchorLink>
        </div>
        <div className={`flex-none md-cus:flex justify-center`}>
          <div
            class="flex-none gap-2 py-1 md-cus:flex md-cus:gap-0"
            openNavbar={openNavbar}
          >
            <div class="relative right-0 mr-3 md-cus:hidden">
              <Button
                color="transparent"
                buttonType="link"
                size="lg"
                iconOnly
                rounded
                ripple="light"
                onClick={() => setOpenNavbar(!openNavbar)}
              >
                <span class="material-icons md-32 text-white">menu</span>
              </Button>
            </div>
            {NavItem.map(item => {
              return (
                <AnchorLink href={item.url}>
                  <Button
                    className="w-36"
                    color="amber"
                    buttonType="filled"
                    size="sm"
                    rounded={true}
                    ripple="light"
                  >
                    <span className="text-secondary-darker normal-case text-base">
                      {item.title}
                    </span>
                  </Button>
                </AnchorLink>
              )
            })}
          </div>
        </div>
      </NavbarContainer>
    </div>
  )
}

export default Nav
