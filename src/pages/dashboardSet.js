import React from "react"
import Card from "@material-tailwind/react/Card"
import CardHeader from "@material-tailwind/react/CardHeader"
import CardBody from "@material-tailwind/react/CardBody"
import LayoutDashboard from "../components/layoutDashboard"
import SosmedCard from "../components/SosmedCard"
import "@material-tailwind/react/tailwind.css"

export default function dashboardSet() {
  const visitors = [
    {
      id: "1",
      name: "Bambang",
      country: "Indonesia",
    },
    {
      id: "2",
      name: "Deddy",
      country: "Indonesia",
    },
    {
      id: "3",
      name: "Suharti",
      country: "Indonesia",
    },
    {
      id: "4",
      name: "Reza arap",
      country: "Indonesia",
    },
    {
      id: "5",
      name: "Ariel",
      country: "Indonesia",
    },
  ]

  return (
    <LayoutDashboard>
      <main className="h-full flex flex-col gap-y-12 md:flex-row md:gap-x-6 items-center justify-center py-24">
        <Card className="w-full border border-gray-300 mx-auto">
          <CardHeader color="blue" contentPosition="none">
            <div className="w-full flex items-center justify-between">
              <h2 className="text-white text-2xl">Page Visits</h2>
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
                      Country
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {visitors.map(item => {
                    return (
                      <tr>
                        <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                          {item.id}
                        </th>
                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                          {item.name}
                        </td>
                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                          {item.country}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </CardBody>
        </Card>
        <SosmedCard className="mx-auto" />
      </main>
    </LayoutDashboard>
  )
}
