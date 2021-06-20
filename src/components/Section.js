import * as React from "react"

const Section = ({ id, children, className }) => {
  return (
    <section
      id={id}
      className={`my-5 p-10 items-center flex flex-col md:px-20 md:py-10 ${className}`}
    >
      <div>{children}</div>
    </section>
  )
}

export default Section
