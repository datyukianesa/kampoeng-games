import * as React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import Profile from "../components/profile"
import Login from "../components/login"
import PrivateRoute from "../components/privateRoute"

// import LayoutDashboard from "../components/layoutDashboard"

// export default function app() {
//   return (
//     <LayoutDashboard>
//       <div className="h-screen flex items-center justify-center">
//         <h1>Something here</h1>
//       </div>
//     </LayoutDashboard>
//   )
// }

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/profile" component={Profile} />
      <Login path="/app/login" />
    </Router>
  </Layout>
)
export default App
