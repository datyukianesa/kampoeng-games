import React from "react"
import Button from "@material-tailwind/react/Button"
// import Sidebar from "../components/Sidebar"
// import LayoutAdmin from "../components/LayoutAdmin"
import "@material-tailwind/react/tailwind.css"

export default function login() {
  return (
    <div>
      {/* <Sidebar /> */}
      {/* <LayoutAdmin /> */}
      <div class="ml-96">
        <h1 class="text-4xl text-bolder">Halaman Login niii...!!</h1>
        <Button
          color="lightBlue"
          buttonType="filled"
          rounded={false}
          block={false}
          iconOnly={false}
          ripple="light"
        >
          Button
        </Button>
      </div>
    </div>
  )
}
