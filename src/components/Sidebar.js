import * as React from "react"
import "@material-tailwind/react/tailwind.css"
import { Link } from "gatsby"
import H6 from "@material-tailwind/react/Heading6"
// import Icon from "@material-tailwind/react/Icon"
import Button from "@material-tailwind/react/Button"

export default function Sidebar() {
  return (
    <div className="h-screen fixed top-0 overflow-y-auto flex-row flex-nowrap shadow-xl bg-white w-64 py-4 px-6">
      <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
        <a
          href="https://material-tailwind.com?ref=mtd"
          target="_blank"
          rel="noreferrer"
          className="mt-2 text-center w-full inline-block"
        >
          <H6 color="gray">Material Tailwind</H6>
        </a>
        <div className="flex flex-col">
          <hr className="my-4 min-w-full" />

          <ul className="flex-col min-w-full flex list-none">
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
          </ul>
        </div>
      </div>
    </div>
  )
}
