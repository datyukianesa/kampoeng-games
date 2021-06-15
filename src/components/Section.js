import * as React from "react"
import Heading from "./Heading.js"

const Section = ({ children, head }) => {
  return (
    <section>
      <Heading>{head}</Heading>
      <div className="container flex items-center mx-auto">{children}</div>
    </section>
  )
}

export default Section
