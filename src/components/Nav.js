import * as React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import LogoIcon from "../svg/LogoIcon"
import Button from "@material-tailwind/react/Button"

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
          <ul className={`flex gap-4 pt-6 pb-1 justify-center mx-auto`}>
            <div class="absolute left-0 ml-3">
              <Button
                color="transparent"
                buttonType="link"
                size="lg"
                iconOnly
                rounded
                ripple="light"
              >
                <span class="material-icons md-32 text-white">menu</span>
              </Button>
            </div>
            <AnchorLink href="#desc">
              <Button
                className="w-36"
                color="amber"
                buttonType="filled"
                size="sm"
                rounded={true}
                ripple="light"
              >
                <span className="text-secondary-darker normal-case text-base">
                  Deskripsi
                </span>
              </Button>
            </AnchorLink>
            <AnchorLink href="#team">
              <Button
                className="w-36"
                color="amber"
                buttonType="filled"
                size="sm"
                rounded={true}
                ripple="light"
              >
                <span className="text-secondary-darker normal-case text-base">
                  Tim
                </span>
              </Button>
            </AnchorLink>
            <AnchorLink href="#history">
              <Button
                className="w-36"
                color="amber"
                buttonType="filled"
                size="sm"
                rounded={true}
                ripple="light"
              >
                <span className="text-secondary-darker normal-case text-base">
                  Tentang
                </span>
              </Button>
            </AnchorLink>
            <AnchorLink href="#products">
              <Button
                className="w-36"
                color="amber"
                buttonType="filled"
                size="sm"
                rounded={true}
                ripple="light"
              >
                <span className="text-secondary-darker normal-case text-base">
                  Produk
                </span>
              </Button>
            </AnchorLink>
            <AnchorLink href="#vision">
              <Button
                className="w-36"
                color="amber"
                buttonType="filled"
                size="sm"
                rounded={true}
                ripple="light"
              >
                <span className="text-secondary-darker normal-case text-base">
                  Visi dan Misi
                </span>
              </Button>
            </AnchorLink>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Nav
