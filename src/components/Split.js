import * as React from "react"

const Split = ({ id, first, second, className, reverse }) => {
  return (
    <section
      className={`items-center flex flex-col lg:flex-row lg:px-20`}
      id={id}
    >
      <div className={`w-1/2 ${className}`}>{first}</div>
      <div className={`w-1/2 mt-10 ${reverse && `order-last lg:order-first`}`}>
        {second}
      </div>
    </section>
  )
}

export default Split
