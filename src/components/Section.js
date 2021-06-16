import * as React from "react"
import Heading from "./Heading.js"

const Section = ({ children, head }) => {
  return (
    <section className="py-20">
      <Heading>{head}</Heading>
      <div className="container mx-auto px-16 items-center flex flex-col lg:flex-row">
        <div className="container flex items-center mx-auto">{children}</div>
      </div>
    </section>
  )
}

export default Section
