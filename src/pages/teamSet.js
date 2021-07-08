import React from "react"
import Card from "@material-tailwind/react/Card"
import CardBody from "@material-tailwind/react/CardBody"
import Heading from "../components/Heading"
import Paragraph from "../components/Paragraph"
import ProfileImage from "../components/ProfileImage"
import { StaticImage } from "gatsby-plugin-image"
import Button from "@material-tailwind/react/Button"
import LogoIcon from "../svg/LogoIcon"
import LayoutDashboard from "../components/layoutDashboard"
import "@material-tailwind/react/tailwind.css"

export default function accountSet() {
  const cardItem = [
    {
      name: "Khalif Farrel Yuandra",
      title: "Front-end Designer",
      nim: "19.11.3256",
      imgUrl: "../images/farrel.png",
    },
  ]

  return (
    <LayoutDashboard>
      <div className="h-screen flex items-center justify-center">
        <Card className="w-full border border-gray-300 mx-6">
          <div className="flex flex-row flex-grow gap-4">
            <div className="w-12 h-12 md:w-16 rounded-full bg-yellow-400 border-2 border-gray-900">
              <LogoIcon className={"p-1 md:p-2"} />
            </div>
            <span className="text-dark font-bold text-xl flex items-center">
              Account Setting
            </span>
          </div>
          <CardBody>
            <div className={`grid grid-cols-1 md:grid-cols-3 md:m-2`}>
              {cardItem.map(item => {
                return (
                  <Card className={`text-center flex-1 md:mx-2`}>
                    <ProfileImage>
                      <StaticImage
                        className="w-20 h-20 rounded-full m-5"
                        loading="eager"
                        src="../images/farrel.png"
                        alt="Khalif Farrel"
                      ></StaticImage>
                    </ProfileImage>
                    <Heading className={`text-complementary`}>
                      {item.name}
                    </Heading>
                    <div className="py-2">
                      <Paragraph className={`text-complementary-darker`}>
                        {item.title}
                      </Paragraph>
                      <Paragraph className={`text-complementary-darker`}>
                        {item.nim}
                      </Paragraph>
                    </div>
                  </Card>
                )
              })}
              <Card className={`flex items-center justify-center md:mx-2`}>
                {/* <div class="flex items-center"> */}
                <Button
                  color="transparent"
                  buttonType="filled"
                  size="lg"
                  iconOnly
                  rounded
                  ripple="light"
                >
                  <span class="material-icons md-48 text-yellow-400">add</span>
                </Button>
                {/* </div> */}
              </Card>
            </div>
          </CardBody>
        </Card>
      </div>
    </LayoutDashboard>
  )
}
