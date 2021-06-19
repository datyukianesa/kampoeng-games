import * as React from "react"
import Heading from "./Heading.js"

const Section = ({ id, children, head, className }) => {
  return (
    <section
      id={id}
      className={`container px-10 py-20 md:px-20 md:py-10 ${className}`}
    >
      <Heading>{head}</Heading>
      <div className="">{children}</div>
    </section>
  )
}

export default Section
