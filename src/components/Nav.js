import * as React from "react"
import { useState } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import LogoIcon from "../svg/LogoIcon"
import Button from "@material-tailwind/react/Button"
import { Link } from "gatsby"

const Nav = () => {
  const [isOpen, setOpen] = useState(false)
  const NavItem = [
    {
      title: "Deskripsi",
      url: "#desc",
    },
    {
      title: "Tim",
      url: "#team",
    },
    {
      title: "Tentang",
      url: "#history",
    },
    {
      title: "Produk",
      url: "#products",
    },
    {
      title: "Visi dan Misi",
      url: "#vision",
    },
  ]

  return (
    <div className="bg-secondary text-white shadow sticky top-0 z-50">
      <div className="flex flex-col pt-1 mx-4">
        <div class="flex justify-between">
          <div className="w-20 h-20 rounded-full bg-primary hover:bg-primary-lighter border-8 self-center border-secondary -my-5">
            <AnchorLink href="#home" offset="200">
              <LogoIcon className={`p-1`} />
            </AnchorLink>
          </div>
          <div className={`hidden lg:block justify-center py-2 mr-10`}>
            <div class="flex-none gap-2 py-1 lg:flex">
              {/* at lg > breakpoint */}
              {NavItem.map(item => {
                return (
                  <AnchorLink href={item.url}>
                    <li className="list-none text-white font-medium px-8 normal-case text-base hover:text-yellow-500">
                      {item.title}
                    </li>
                  </AnchorLink>
                )
              })}
              <Link to="login">
                <div className="list-none text-white font-medium px-8 normal-case text-base hover:text-yellow-500">
                  Login
                </div>
              </Link>
            </div>
          </div>
          <div class="relative right-0 pb-1 lg:hidden">
            <Button
              color="transparent"
              buttonType="link"
              size="lg"
              iconOnly
              rounded
              ripple="light"
              onClick={() => setOpen(!isOpen)}
            >
              <span class="material-icons md-32 text-white">menu</span>
            </Button>
          </div>
        </div>
        {/* at mdcus < breakpoint */}
        <ul
          class={`list-none ${
            isOpen ? "block" : "hidden"
          } lg:hidden items-center px-4 pt-10`}
        >
          {NavItem.map(item => {
            return (
              <AnchorLink href={item.url} onClick={() => setOpen(!isOpen)}>
                <li class="w-full border-t-2 hover:bg-primary text-white flex justify-center items-center py-2 lg:hidden">
                  {item.title}
                </li>
              </AnchorLink>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Nav
