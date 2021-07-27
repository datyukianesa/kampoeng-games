import * as React from "react"

const Split = ({ id, first, second, className, reverse, firstClass }) => {
  return (
    <section
      className={`my-5 items-center flex flex-col lg:flex-row lg:px-20 shadow-xl ${className}`}
      id={id}
    >
      <div className={`w-1/2 ${firstClass}`}>{first}</div>
      <div className={`w-1/2 my-2  ${reverse && `order-last lg:order-first`}`}>
        {second}
      </div>
    </section>
  )
}

export default Split
