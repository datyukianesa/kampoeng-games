import * as React from "react"
import Heading from "./Heading"

const Card = ({ children, head, className }) => {
  return (
    <div
      className={`p-2 my-2 rounded-lg border-2 shadow border-solid ${className}`}
    >
      <Heading>{head}</Heading>
      {children}
    </div>
  )
}

export default Card
