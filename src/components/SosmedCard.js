import * as React from "react"
import Card from "@material-tailwind/react/Card"
import CardHeader from "@material-tailwind/react/CardHeader"
import CardBody from "@material-tailwind/react/CardBody"
import Progress from "@material-tailwind/react/Progress"

export default function SosmedCard() {
  const referral = [
    {
      name: 'Facebook',
      total: '1,480',
      color: 'blue',
      value: '60',
    },
    {
      name: 'Google',
      total: '4,807',
      color: 'red',
      value: '80',
    },
    {
      name: 'Instagram',
      total: '3,678',
      color: 'indigo',
      value: '75',
    },
    {
      name: 'Twitter',
      total: '2,645',
      color: 'red',
      value: 'lightBlue',
    },
  ]

  return (
    <Card>
      <CardHeader color="purple" contentPosition="none">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-white text-2xl">Social Media</h2>
        </div>
      </CardHeader>
      <CardBody>
        <div className="overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead className="thead-light">
              <tr>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Referral
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Visitors
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left w-56"></th>
              </tr>
            </thead>
            <tbody>
              {referral.map(item => {
                return (
                <tr>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  {item.name}   
                </th>
                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  {item.total}
                </td>
                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  <Progress color={item.color} value={item.value} />
                </td>
              </tr>
              )
              })}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  )
}
