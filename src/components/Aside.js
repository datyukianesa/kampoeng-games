import * as React from "react"

const Aside = ({ children, className }) => {
  return (
    <div className={` ${className}`}>
      <aside>{children}</aside>
    </div>
  )
}

export default Aside
