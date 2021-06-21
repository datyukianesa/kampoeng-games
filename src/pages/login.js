import React from "react"
import Card from "@material-tailwind/react/Card"
import CardBody from "@material-tailwind/react/CardBody"
import Button from "@material-tailwind/react/Button"
import Input from "@material-tailwind/react/Input"
import LogoIcon from "../svg/LogoIcon"
import LayoutDashboard from "../components/layoutDashboard"
import "@material-tailwind/react/tailwind.css"

export default function login() {
  return (
    <LayoutDashboard>
      <div className="h-screen flex items-center justify-center">
        <Card className="w-96 border border-gray-300">
          <div className="w-16 h-16 rounded-full bg-yellow-400 mx-auto border-2 border-gray-900">
            <LogoIcon className={"p-2"} />
          </div>
          <CardBody>
            <form>
              <div className="flex flex-col mt-10">
                <div className="w-full pr-4 mb-10 font-light">
                  <Input
                    type="text"
                    color="lightBlue"
                    size="regular"
                    outline={true}
                    placeholder="Username"
                  />
                </div>
                <div className="w-full pr-4 mb-10 font-light">
                  <Input
                    type="text"
                    color="lightBlue"
                    size="regular"
                    outline={true}
                    placeholder="Password"
                  />
                </div>
              </div>
              <Button
                color="blue"
                buttonType="filled"
                size="regular"
                rounded={false}
                block={false}
                ripple="light"
              >
                Login
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>
    </LayoutDashboard>
  )
}
