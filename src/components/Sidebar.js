import * as React from "react"
import { Link } from "gatsby"
import { useState } from "react"
import Button from "@material-tailwind/react/Button"
import NavbarAdmin from "./NavbarAdmin"
import LogoIcon from "../svg/LogoIcon"
import "@material-tailwind/react/tailwind.css"

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState("-left-64")

  return (
    <div>
      <NavbarAdmin showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div
        class={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-secondary w-64 z-10 px-6 transition-all duration-300`}
      >
        <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
          <div class="flex flex-row items-center pt-2">
            <Button
              color="transparent"
              buttonType="link"
              size="lg"
              iconOnly
              rounded
              ripple="light"
            >
              <span class="material-icons md-28 text-white">menu</span>
            </Button>
            <h6 class="text-white text-md font-bold">Dashboard Admin</h6>
          </div>
          <div className="flex flex-col">
            <hr className="min-w-full" />
            <div className="w-16 rounded-full bg-yellow-400 mx-auto my-4">
              <LogoIcon className={"p-2"} />
            </div>

            <ul className="flex flex-col min-w-full list-none grid-cols gap-6">
              <Link to="/login">
                <Button
                  class="mb-4 w-full"
                  color="amber"
                  buttonType="filled"
                  block={true}
                  size="regular"
                  ripple="light"
                  onClick={() => setShowSidebar("-left-64")}
                >
                  <span class="material-icons">login</span>
                  Login
                </Button>
              </Link>
              <Link to="/Admin">
                <Button
                  class="mb-4 w-full"
                  color="amber"
                  buttonType="filled"
                  block={true}
                  size="regular"
                  ripple="light"
                  onClick={() => setShowSidebar("-left-64")}
                >
                  <span class="material-icons">dashboard</span>
                  Dashboard
                </Button>
              </Link>
              <Link to="/homeSet">
                <Button
                  class="mb-4 w-full"
                  color="amber"
                  buttonType="filled"
                  block={true}
                  size="regular"
                  ripple="light"
                  onClick={() => setShowSidebar("-left-64")}
                >
                  <span class="material-icons">article</span>
                  Page Setting
                </Button>
              </Link>
              <Link>
                <Button
                  class="mb-4 w-full"
                  color="amber"
                  buttonType="filled"
                  block={true}
                  size="regular"
                  ripple="light"
                  onClick={() => setShowSidebar("-left-64")}
                >
                  <span class="material-icons">groups</span>
                  Tim
                </Button>
              </Link>
              <Link>
                <Button
                  class="mb-4 w-full"
                  color="amber"
                  buttonType="filled"
                  block={true}
                  size="regular"
                  ripple="light"
                  onClick={() => setShowSidebar("-left-64")}
                >
                  <span class="material-icons">settings</span>
                  Produk/Service
                </Button>
              </Link>
              <Link to="/accountSet">
                <Button
                  class="mb-4 w-full"
                  color="amber"
                  buttonType="filled"
                  block={true}
                  size="regular"
                  ripple="light"
                  onClick={() => setShowSidebar("-left-64")}
                >
                  <span class="material-icons">contacts</span>
                  Kontak kami
                </Button>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
