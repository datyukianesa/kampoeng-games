import * as React from "react"

const Split = ({ id, first, second, className, reverse }) => {
  return (
    <section
      className={`container mx-auto items-center flex flex-col px-10 py-10 lg:flex-row md:px-20`}
      id={id}
    >
      <div className={`flex flex-grow lg:w-1/2 ${className}`}>{first}</div>
      <div
        className={`w-full mt-10 lg:mt-0 lg:w-1/2 ${
          reverse && `order-last lg:order-first`
        }`}
      >
        {second}
      </div>
    </section>
  )
}

export default Split
