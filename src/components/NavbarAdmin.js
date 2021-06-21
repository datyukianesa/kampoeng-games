import React from "react"
import NavbarInput from "@material-tailwind/react/NavbarInput"
import Dropdown from "@material-tailwind/react/Dropdown"
import DropdownItem from "@material-tailwind/react/DropdownItem"
import Button from "@material-tailwind/react/Button"
import "@material-tailwind/react/tailwind.css"

export default function NavbarAdmin({ showSidebar, setShowSidebar }) {
  return (
    <nav className="bg-secondary md:ml-64 py-3 px-4">
      <div className="container max-w-full mx-auto flex items-center justify-between md:pr-4 md:pl-10">
        <div className="md:hidden">
          <Button
            color="transparent"
            buttonType="link"
            size="lg"
            iconOnly
            rounded
            ripple="light"
            onClick={() => setShowSidebar("left-0")}
          >
            <span class="material-icons md-32 text-white">menu</span>
          </Button>
          <div
            className={`absolute top-2 md:hidden ${
              showSidebar === "left-0" ? "left-64" : "-left-64"
            } z-50 transition-all duration-300`}
          >
            <Button
              color="transparent"
              buttonType="link"
              size="lg"
              iconOnly
              rounded
              ripple="light"
              onClick={() => setShowSidebar("-left-64")}
            >
              <span class="material-icons md-32 text-white">close</span>
            </Button>
          </div>
        </div>

        <div className="flex justify-between items-center w-full">
          <h4 className="text-white font-bold">For Debugging</h4>

          <div className="flex">
            <NavbarInput placeholder="Search" />

            <div className="-mr-4 ml-6">
              <Dropdown
                color="transparent"
                buttonText={
                  <div className="flex flex-row">
                    <span class="material-icons md-32 text-white">
                      account_circle
                    </span>
                    <span class="material-icons md-32 text-white">
                      arrow_drop_down
                    </span>
                  </div>
                }
                rounded
                style={{
                  padding: 0,
                  color: "transparent",
                }}
              >
                <DropdownItem color="lightBlue">Haloww, name</DropdownItem>
                <DropdownItem color="lightBlue">Logout</DropdownItem>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
