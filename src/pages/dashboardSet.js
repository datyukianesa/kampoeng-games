import React from "react"
import Card from "@material-tailwind/react/Card"
import CardHeader from "@material-tailwind/react/CardHeader"
import CardBody from "@material-tailwind/react/CardBody"
import Button from "@material-tailwind/react/Button"
import LayoutDashboard from "../components/layoutDashboard"
import "@material-tailwind/react/tailwind.css"

export default function dashboardSet() {
  const tableItem = [
    {
      id: "1",
      name: "Khalif Farrel Yuandra",
      title: "Front-end Designer",
      nim: "19.11.3256",
    },
    {
      id: "2",
      name: "Ignatius Tegar Saputra",
      title: "Front-end Designer",
      nim: "19.11.3298",
    },
    {
      id: "3",
      name: "Bilal Muhtasyimbillah",
      title: "Front-end Designer",
      nim: "19.11.3272",
    },
    {
      id: "4",
      name: "Fanni Fadhila",
      title: "Back-end Developer",
      nim: "19.11.3300",
    },
    {
      id: "5",
      name: "Abyan Zhafran Daffa",
      title: "Back-end Developer",
      nim: "19.11.3252",
    },
    {
      id: "6",
      name: "Nadhira Triadha Pitaloka",
      title: "Front-end Designer",
      nim: "19.11.3270",
    },
  ]

  return (
    <LayoutDashboard>
      <div className="h-screen flex items-center justify-center">
        <Card className="w-full border border-gray-300 mx-6">
          <CardHeader color="blue" contentPosition="none">
            <div className="w-full flex items-center justify-between">
              <h2 className="text-white text-2xl">Page Visits</h2>
              <Button
                color="transparent"
                buttonType="link"
                size="lg"
                style={{ padding: 0 }}
              >
                See More
              </Button>
            </div>
          </CardHeader>
          <CardBody>
            <div className="overflow-x-auto">
              <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                  <tr>
                    <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                      ID
                    </th>
                    <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                      Name
                    </th>
                    <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                      Position
                    </th>
                    <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                      NIM
                    </th>
                    <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableItem.map(item => {
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
                          <span className="text-blue-600 cursor-pointer pr-4">
                            Edit
                          </span>
                          <span className="text-red-400 cursor-pointer">
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
      </div>
    </LayoutDashboard>
  )
}
