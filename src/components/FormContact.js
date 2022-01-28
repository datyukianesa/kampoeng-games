import * as React from "react"
import Card from "./Card"

export default function FormContact() {
  return (
    <Card>
      <form className="flex flex-col items-center text-complementary justify-center p-10">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col m-2">
            <label className="text-xl">Name</label>
            <input
              className="border-2 border-solid border-gray-600 p-2 rounded-lg"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="flex flex-col m-2">
            <label className="text-xl">Email</label>
            <input
              className="border-2 border-solid border-gray-600 p-2 rounded-lg"
              type="text"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center pt-5">
          <button className="bg-complementary-lighter hover:bg-complementary-darker text-secondary-darker font-bold py-2 px-4 rounded-lg">
            Submit
          </button>
        </div>
      </form>
    </Card>
  )
}
