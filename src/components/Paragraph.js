import * as React from "react"

const Paragraph = ({ children, className }) => {
  return (
    <p className={`prose prose-sm m:prose-m lg:prose-lg  ${className}`}>
      {children}
    </p>
  )
}

export default Paragraph
