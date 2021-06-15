import * as React from "react"
import Heading from "./Heading"

const Card = ({ children, head }) => {
  return (
    <div className={"p-12 rounded-lg border border-solid"}>
      <Heading>{head}</Heading>
      {children}
    </div>
  )
}

export default Card
