import React from "react"
import Card from "@material-tailwind/react/Card"
import CardHeader from "@material-tailwind/react/CardHeader"
import CardBody from "@material-tailwind/react/CardBody"
import Button from "@material-tailwind/react/Button"
import Input from "@material-tailwind/react/Input"
import "@material-tailwind/react/tailwind.css"

export default function login() {
  return (
    <div className="m-8">
      <Card>
        <CardHeader color="amber" contentPosition="none">
          <div className="w-full flex items-center justify-between">
            <h2 className="text-white text-2xl">Login</h2>
          </div>
        </CardHeader>
        <CardBody>
          <form>
            <div className="flex flex-wrap mt-10">
              <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                <Input type="text" color="purple" placeholder="Username" />
              </div>
              <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                <Input type="text" color="purple" placeholder="Password" />
              </div>
            </div>
            <Button
              color="lightBlue"
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
  )
}
