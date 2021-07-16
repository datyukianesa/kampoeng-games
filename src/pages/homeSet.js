import React, { useState, useEffect } from "react"
import Card from "@material-tailwind/react/Card"
import CardHeader from "@material-tailwind/react/CardHeader"
import CardBody from "@material-tailwind/react/CardBody"
import Button from "@material-tailwind/react/Button"
// import Textarea from "@material-tailwind/react/Textarea"
import Modal from "@material-tailwind/react/Modal"
import ModalHeader from "@material-tailwind/react/ModalHeader"
import ModalFooter from "@material-tailwind/react/ModalFooter"
import LayoutDashboard from "../components/layoutDashboard"
import "@material-tailwind/react/tailwind.css"
import axios from "axios"

const HomeSet = () => {
  const [textGrep, textList] = useState("")
  const url = "http://localhost:1337/homepage"
  const [showModal, setShowModal] = useState(false)
  useEffect(() => {
    axios.get(url).then((response, req) => {
      textList(response.data)
    })
  }, [])

  const textResult = JSON.stringify(textGrep).replace(/['[\]{}:"]/g, "")

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
                {textResult.replace(/(homepageText)/, "")}
                {/* <Textarea
                  color="lightBlue"
                  size="Regular"
                  outline={true}
                  placeholder="Edit Homepage here...."
                  success="Homepage"
                > */}
                {/* Kampoeng Games sekarang telah memiliki lebih dari 100 games
                  dan voucher dari segala provider. Perusahaan kami juga telah
                  di sponsori oleh berbagai perusahaan lainnya, seperti Razer,
                  G-Fuel, Microsoft, Playstation, Xbox, dan lain-lainnya. Dengan
                  ini, Kampoeng Games menjadi toko hiburan dibidang gaming
                  terlengkap di Indonesia. */}
                {/* {textResult.replace(/(homepageText)/, "")} */}
                {/* </Textarea> */}
              </div>
              <div className="flex flex-row gap-3">
                <Button
                  color="green"
                  buttonType="filled"
                  type="Button"
                  size="regular"
                  rounded={false}
                  block={false}
                  ripple="light"
                >
                  Update
                </Button>
                <Button
                  color="blue"
                  buttonType="filled"
                  type="Button"
                  size="regular"
                  onClick={e => setShowModal(true)}
                  ripple="light"
                >
                  Submit
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>

        <Modal size="sm" active={showModal} toggler={() => setShowModal(false)}>
          <ModalHeader toggler={() => setShowModal(false)}>
            Want to Update..??
          </ModalHeader>
          <ModalFooter>
            <Button
              color="red"
              buttonType="link"
              onClick={e => setShowModal(false)}
              ripple="dark"
            >
              Close
            </Button>

            <Button
              color="green"
              onClick={e => setShowModal(false)}
              ripple="light"
            >
              Save Changes
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </LayoutDashboard>
  )
}

export default HomeSet
