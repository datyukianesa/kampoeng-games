import * as React from "react"

const Section = ({ id, children, className }) => {
  return (
    <section id={id} className={`my-5 p-10 md:px-20 md:py-10 ${className}`}>
      <div className="">{children}</div>
    </section>
  )
}

export default Section
