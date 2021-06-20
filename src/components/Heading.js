import * as React from "react"

const Heading = ({ children, className }) => {
  return (
    <h1 className={`prose prose-l md:prose-xl lg:prose-2xl ${className}`}>
      {children}
    </h1>
  )
}

export default Heading
