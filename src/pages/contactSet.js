import React from "react"
import Card from "@material-tailwind/react/Card"
import CardBody from "@material-tailwind/react/CardBody"
import Button from "@material-tailwind/react/Button"
import Input from "@material-tailwind/react/Input"
import LogoIcon from "../svg/LogoIcon"
import "@material-tailwind/react/tailwind.css"

export default function contactUsSet() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Card className="w-full border border-gray-300 mx-10">
        <div className="flex flex-row gap-4 pl-4">
          <div className="w-16 h-16 rounded-full bg-yellow-400 border-2 border-gray-900">
            <LogoIcon className={"p-2"} />
          </div>
          <span className="text-dark font-bold text-xl flex items-center">
            Contact Us Setting
          </span>
        </div>
        <CardBody>
          <form>
            <div className="flex flex-col mt-8 mb-4">
              <span className="text-base mb-4 uppercase">
                Contact Information
              </span>
              <div className="w-full pr-4 mb-6 font-light">
                <Input
                  type="text"
                  color="lightBlue"
                  size="regular"
                  outline={true}
                  placeholder="Username"
                />
              </div>
              <div className="w-full pr-4 mb-8 font-light">
                <Input
                  type="email"
                  color="lightBlue"
                  size="regular"
                  outline={true}
                  placeholder="Email"
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
              Submit
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  )
}
