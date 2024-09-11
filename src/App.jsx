import NavigationBar from "./NavigationBar"
import Home from "./Home"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LoginAdmin from "./Admin/adminLogin"



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
      }
    ]
  )
  return(
      <RouterProvider router={router}/>
  )
}
export default App