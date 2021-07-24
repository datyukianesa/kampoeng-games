import React, { useState, useEffect } from "react"
import Card from "@material-tailwind/react/Card"
import CardHeader from "@material-tailwind/react/CardHeader"
import CardBody from "@material-tailwind/react/CardBody"
import Button from "@material-tailwind/react/Button"
import Modal from "@material-tailwind/react/Modal"
import ModalHeader from "@material-tailwind/react/ModalHeader"
import ModalFooter from "@material-tailwind/react/ModalFooter"
import ModalBody from "@material-tailwind/react/ModalBody"
import Input from "@material-tailwind/react/Input"
import LayoutDashboard from "../components/layoutDashboard"
import "@material-tailwind/react/tailwind.css"
import axios from "axios"

const TeamSet = () => {
  const [showModal, setShowModal] = useState(false)
  const [showModalDel, setShowModalDel] = useState(false)
  const [showModalUp, setShowModalUp] = useState(false)
  const [isShow, setShow] = useState(false)
  const [isShowDel, setShowDel] = useState(false)
  // CRUD const
  const url = "http://localhost:1337/team"
  const [teamList, setTeamList] = useState([])
  useEffect(() => {
    axios.get(url).then((response, req) => {
      setTeamList(response.data)
    })
  }, [])
  // END CRUD
  const fields = [
    {
      field: "ID",
    },
    {
      field: "Name",
    },
    {
      field: "Position",
    },
    {
      field: "NIM",
    },
    {
      field: "Action",
    },
  ]

  return (
    <LayoutDashboard>
      <div className="h-screen flex items-center justify-center">
        <Card className="w-full border border-gray-300 mx-6">
          <CardHeader color="blue" contentPosition="none">
            <div className="w-full flex items-center justify-between">
              <h2 className="text-white text-2xl">Edit Team</h2>
              <Button
                color="transparent"
                buttonType="filled"
                onClick={e => setShowModal(true)}
                size="lg"
              >
                <span class="material-icons md-24 text-white font-semibold">
                  add
                </span>
                Add Team
              </Button>
            </div>
          </CardHeader>
          <CardBody>
            {/* Success Message */}
            <div
              class={`${
                isShow ? "block" : "hidden"
              } flex justify-center items-center m-1 font-medium py-1 px-2 rounded-md text-green-700 bg-green-100 border border-green-300`}
            >
              <span class="material-icons md-24 font-semibold text-green-800 mr-2">
                task_alt
              </span>
              <div class="text-xl font-normal  max-w-full flex-initial">
                Succesfully Update Team
              </div>
              <div class="flex flex-auto flex-row-reverse">
                <span
                  class="material-icons md-18 font-semibold text-green-800 cursor-pointer"
                  onClick={() => setShow(!isShow)}
                >
                  close
                </span>
              </div>
            </div>
            {/* End Success Message */}
            {/* Delete Message */}
            <div
              class={`${
                isShowDel ? "block" : "hidden"
              } flex justify-center items-center m-1 font-medium py-1 px-2 rounded-md text-red-700 bg-red-100 border border-red-300`}
            >
              <span class="material-icons md-24 font-semibold text-red-800 mr-2">
                task_alt
              </span>
              <div class="text-xl font-normal  max-w-full flex-initial">
                Succesfully Delete Team
              </div>
              <div class="flex flex-auto flex-row-reverse">
                <span
                  class="material-icons md-18 font-semibold text-red-800 cursor-pointer"
                  onClick={() => setShowDel(!isShowDel)}
                >
                  close
                </span>
              </div>
            </div>
            {/* End Delete Message */}
            <div className="overflow-x-auto h-80">
              <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                  <tr>
                    {fields.map(item => {
                      return (
                        <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-base whitespace-nowrap font-semibold text-left">
                          {item.field}
                        </th>
                      )
                    })}
                  </tr>
                </thead>
                <tbody>
                  {teamList.map(item => {
                    return (
                      <tr>
                        <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                          {item.id}
                        </th>
                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                          {item.name}
                        </td>
                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                          {item.title}
                        </td>
                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                          {item.nim}
                        </td>
                        <td className="border-b border-gray-200 align-middle font-semibold text-sm whitespace-nowrap px-2 py-4 text-left text-bold">
                          <span
                            className="text-blue-600 cursor-pointer pr-4"
                            onClick={e => setShowModalUp(true)}
                          >
                            Edit
                          </span>
                          <span
                            className="text-red-400 cursor-pointer"
                            onClick={e => setShowModalDel(true)}
                          >
                            Delete
                          </span>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </CardBody>
        </Card>
        {/* Add Team Modal */}
        <Modal
          size="regular"
          active={showModal}
          toggler={() => setShowModal(false)}
        >
          <ModalHeader toggler={() => setShowModal(false)}>
            Add Your Team
          </ModalHeader>
          <ModalBody>
            <div className="flex flex-col mt-4 gap-4">
              <div className="w-full font-light">
                <Input
                  type="text"
                  color="lightBlue"
                  size="regular"
                  outline={true}
                  placeholder="Username"
                />
              </div>
              <div className="w-full font-light">
                <Input
                  type="password"
                  color="lightBlue"
                  size="regular"
                  outline={true}
                  placeholder="Password"
                />
              </div>
              <div className="w-full font-light">
                <Input
                  type="number"
                  color="lightBlue"
                  size="regular"
                  outline={true}
                  placeholder="Nim no(dot)"
                />
              </div>
            </div>
          </ModalBody>
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
              onClick={() => {
                setShowModal(false)
                setShow(true)
              }}
              ripple="light"
            >
              Save Changes
            </Button>
          </ModalFooter>
        </Modal>
        {/* Delete Modal */}
        <Modal
          size="lg"
          active={showModalDel}
          toggler={() => setShowModalDel(false)}
        >
          {/* <ModalHeader toggler={() => setShowModalDel(false)}>
            <div class="pr-2">Want to Delete..??</div>
          </ModalHeader> */}
          <div class="flex justify-between">
            <span class="font-bold pb-4 text-xl">Want to Delete..??</span>
            <span
              class="material-icons md-18 text-black font-bold cursor-pointer"
              onClick={e => setShowModalDel(false)}
            >
              close
            </span>
          </div>
          <ModalFooter>
            <Button
              color="red"
              buttonType="link"
              onClick={e => setShowModalDel(false)}
              ripple="dark"
            >
              Close
            </Button>

            <Button
              color="red"
              ripple="light"
              onClick={() => {
                setShowModalDel(false)
                setShowDel(true)
              }}
            >
              Delete
            </Button>
          </ModalFooter>
        </Modal>
        {/* Modal Edit */}
        <Modal
          size="regular"
          active={showModalUp}
          toggler={() => setShowModalUp(false)}
        >
          <ModalHeader toggler={() => setShowModalUp(false)}>
            Update Team
          </ModalHeader>
          <ModalBody>
            <div className="flex flex-col mt-4 gap-4">
              <div className="w-full font-light">
                <Input
                  type="text"
                  color="lightBlue"
                  size="regular"
                  outline={true}
                  placeholder="Username"
                />
              </div>
              <div className="w-full font-light">
                <Input
                  type="password"
                  color="lightBlue"
                  size="regular"
                  outline={true}
                  placeholder="Password"
                />
              </div>
              <div className="w-full font-light">
                <Input
                  type="number"
                  color="lightBlue"
                  size="regular"
                  outline={true}
                  placeholder="Nim no(dot)"
                />
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              color="red"
              buttonType="link"
              onClick={e => setShowModalUp(false)}
              ripple="dark"
            >
              Close
            </Button>

            <Button
              color="green"
              onClick={e => setShowModalUp(false)}
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

export default TeamSet
