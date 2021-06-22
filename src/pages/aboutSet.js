import React from "react"
import Card from "@material-tailwind/react/Card"
import CardHeader from "@material-tailwind/react/CardHeader"
import CardBody from "@material-tailwind/react/CardBody"
import Button from "@material-tailwind/react/Button"
import Textarea from "@material-tailwind/react/Textarea"
import LayoutDashboard from "../components/layoutDashboard"
import "@material-tailwind/react/tailwind.css"

export default function aboutSet() {
  return (
    // <div className="h-screen flex items-center justify-center">
    <LayoutDashboard>
      <Card className="w-full border border-gray-300 mx-10">
        <CardHeader color="amber" contentPosition="none">
          <div className="w-full flex items-center justify-between">
            <h2 className="text-white text-2xl">About Page Editor</h2>
          </div>
        </CardHeader>
        <CardBody>
          <form>
            <div className="flex flex-wrap mt-10 mb-8">
              <Textarea
                color="lightBlue"
                size="Regular"
                outline={true}
                placeholder="Edit About Page here...."
                success="About"
              />
            </div>
            <Button
              color="lightBlue"
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
    </LayoutDashboard>
    // </div>
  )
}
