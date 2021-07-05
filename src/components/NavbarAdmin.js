import React from "react"
import NavbarInput from "@material-tailwind/react/NavbarInput"
import Dropdown from "@material-tailwind/react/Dropdown"
import DropdownItem from "@material-tailwind/react/DropdownItem"
import Button from "@material-tailwind/react/Button"
import "@material-tailwind/react/tailwind.css"

import { getUser, isLoggedIn, logout } from "../services/auth"
import { Link, navigate } from "gatsby"

export default function NavbarAdmin({ showSidebar, setShowSidebar }) {
  let greetingMessage = ""
  if (isLoggedIn()) {
    greetingMessage = `Hello ${getUser().name}`
  } else {
    greetingMessage = "You are not logged in"
  }
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
        </div>

        <div className="flex justify-between items-center w-full">
          <div />

          <div className="flex">
            <NavbarInput className="flex-grow h-full" placeholder="Search" />

            <div className="-mr-4 ml-2">
              <Dropdown
                color="transparent"
                buttonText={
                  <div className="flex flex-row">
                    <span class="material-icons md-32 text-white">
                      account_circle
                    </span>
                    <span class="material-icons md-32 text-white sm:hidden">
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
                <DropdownItem color="lightBlue">{greetingMessage}</DropdownItem>
                {isLoggedIn() ? (
                  <Link
                    to="/"
                    onClick={event => {
                      event.preventDefault()
                      logout(() => navigate(`/app/login`))
                    }}
                  >
                    <DropdownItem color="lightBlue">Logout</DropdownItem>
                  </Link>
                ) : null}
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
