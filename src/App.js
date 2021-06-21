import React from "react"
import { Router, Link, Location } from "@reach/router"
import "@material-tailwind/react/tailwind.css"

function App() {
  return (
    <div className="p-8">
      <h4>Ini Page Appp....!!!</h4>
    </div>
  )
}

// const Groups = props => (
//   <Location>
//     {({ location }) => (
//       <TransitionGroup className="transition-group">
//         <CSSTransition key={location.key} classNames="fade" timeout={500}>
//           {/* the only difference between a router animation and
//               any other animation is that you have to pass the
//               location to the router so the old screen renders
//               the "old location" */}
//           <Router location={location} className="router">
//             {props.children}
//           </Router>
//         </CSSTransition>
//       </TransitionGroup>
//     )}
//   </Location>
// )
