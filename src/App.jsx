import NavigationBar from "./NavigationBar"
import Home from "./Home"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LoginAdmin from "./Admin/adminLogin"
import AdminHome from "./Admin/AdminHome"



function App(){

  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Home />,

      },
      {
        path: 'adminLogIn',
        element: <LoginAdmin />,
      },
      {
        path: 'Admin',
        element: <AdminHome/>
      }
    ]
  )
  return(
      <RouterProvider router={router}/>
  )
}
export default App