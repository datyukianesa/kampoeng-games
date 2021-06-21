import * as React from "react"
import { Link } from "gatsby"
import { useState } from "react"
import Button from "@material-tailwind/react/Button"
import NavbarAdmin from "./NavbarAdmin"
import LogoIcon from "../svg/LogoIcon"
import "@material-tailwind/react/tailwind.css"

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState("-left-64")

  return (
    <div>
      <NavbarAdmin showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div
        class={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-secondary w-64 z-10 py-4 px-6 transition-all duration-300`}
      >
        <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
          <a
            href="#"
            target="_blank"
            className="mt-2 text-center w-full inline-block"
          >
            <h6 class="text-white text-xl font-bold">Dashboard Admin</h6>
          </a>
          <div className="flex flex-col">
            <hr className="my-4 min-w-full" />

            <ul className="flex flex-col min-w-full list-none grid-cols gap-6">
              <div class="">
                <div className="w-20 h-20 rounded-full bg-yellow-400 mx-auto">
                  <LogoIcon className={"p-2"} />
                </div>
              </div>
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
                  <span class="material-icons">login</span>
                  Login
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
                  <span class="material-icons">dashboard</span>
                  Dashboard
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
                  <span class="material-icons">article</span>
                  Halaman
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
              <Link to="/">
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
