import React from "react"
import Card from "@material-tailwind/react/Card"
import CardHeader from "@material-tailwind/react/CardHeader"
import CardBody from "@material-tailwind/react/CardBody"
import Button from "@material-tailwind/react/Button"
import Textarea from "@material-tailwind/react/Textarea"
import LayoutDashboard from "../components/layoutDashboard"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import "@material-tailwind/react/tailwind.css"

export const query = graphql`
  query {
    contentfulKGamesHomepage {
      product {
        raw
      }
    }
  }
`

const homeSet = ({ data }) => {
  const value = JSON.parse(data.contentfulKGamesHomepage.product.raw)

  function changeItem() {
    return (
      <Textarea
        color="lightBlue"
        size="Regular"
        outline={true}
        placeholder="Edit Homepage here...."
        success="Homepage"
      >
        yoi mamen
      </Textarea>
    )
  }

  return (
    <LayoutDashboard>
      <div className="h-screen flex items-center justify-center">
        <Card className="w-full border border-gray-300 mx-10">
          <CardHeader color="amber" contentPosition="none">
            <div className="w-full flex items-center justify-between">
              <h2 className="text-white text-2xl">Homepage Editor</h2>
            </div>
          </CardHeader>
          <CardBody>
            <form>
              <div className="flex flex-wrap mt-10 mb-8">
                {/* <Textarea
                  color="lightBlue"
                  size="Regular"
                  outline={true}
                  placeholder="Edit Homepage here...."
                  success="Homepage"
                >
                  yoi mamen
                </Textarea> */}
                <p>{documentToReactComponents(value)}</p>
              </div>
              <div className="flex flex-row gap-3">
                <Button
                  color="green"
                  buttonType="filled"
                  type="Button"
                  size="regular"
                  rounded={false}
                  block={false}
                  onclick={changeItem()}
                  ripple="light"
                >
                  Update
                </Button>
                <Button
                  color="lightBlue"
                  buttonType="filled"
                  type="Button"
                  size="regular"
                  rounded={false}
                  block={false}
                  ripple="light"
                >
                  Submit
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>
      </div>
    </LayoutDashboard>
  )
}

export default homeSet
