import * as React from "react"
import { Link } from "gatsby"
import { useState } from "react"
import H6 from "@material-tailwind/react/Heading6"
import Button from "@material-tailwind/react/Button"
import NavbarAdmin from "./NavbarAdmin"
import "@material-tailwind/react/tailwind.css"

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState("-left-64")
  return (
    <div>
      <NavbarAdmin showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div className="h-screen overflow-y-auto flex-row flex-nowrap shadow-xl bg-white w-64 py-4 px-6">
        <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
          <a
            href="#"
            target="_blank"
            className="mt-2 text-center w-full inline-block"
          >
            <H6 color="gray">Dashboard Admin</H6>
          </a>
          <div className="flex flex-col">
            <hr className="my-4 min-w-full" />

            <ul className="flex-col min-w-full flex list-none grid grid-cols gap-6">
              <Link to="/">
                <Button
                  class="mb-4 w-full"
                  color="lightBlue"
                  buttonType="filled"
                  block={true}
                  size="lg"
                  ripple="light"
                >
                  <span class="material-icons">pie_chart</span>
                  Login
                </Button>
              </Link>
              <Link to="/">
                <Button
                  class="mb-4 w-full"
                  color="lightBlue"
                  buttonType="filled"
                  block={true}
                  size="lg"
                  ripple="light"
                >
                  <span class="material-icons">pie_chart</span>
                  Dashboard
                </Button>
              </Link>
              <Link to="/">
                <Button
                  class="mb-4 w-full"
                  color="lightBlue"
                  buttonType="filled"
                  block={true}
                  size="lg"
                  ripple="light"
                >
                  <span class="material-icons">pie_chart</span>
                  Pengaturan Halaman
                </Button>
              </Link>
              <Link to="/">
                <Button
                  class="mb-4 w-full"
                  color="lightBlue"
                  buttonType="filled"
                  block={true}
                  size="lg"
                  ripple="light"
                >
                  <span class="material-icons">pie_chart</span>
                  Pengaturan Tim
                </Button>
              </Link>
              <Link to="/">
                <Button
                  class="mb-4 w-full"
                  color="lightBlue"
                  buttonType="filled"
                  block={true}
                  size="lg"
                  ripple="light"
                >
                  <span class="material-icons">pie_chart</span>
                  Pengaturan Produk
                </Button>
              </Link>
              <Link to="/">
                <Button
                  class="mb-4 w-full"
                  color="lightBlue"
                  buttonType="filled"
                  block={true}
                  size="lg"
                  ripple="light"
                >
                  <span class="material-icons">pie_chart</span>
                  Pengaturan Kontak kami
                </Button>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
