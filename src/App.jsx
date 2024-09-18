import NavigationBar from "./NavigationBar"
import Home from "./Home"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LoginAdmin from "./Admin/adminLogin"
import AdminHome from "./Admin/AdminHome"
import HotelList from "./hotelList"
import Accomodation from "./Accomodation"



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
      },
      {
        path: 'hotel',
        element: <HotelList/>
      },
      {
        path: 'details',
        element:<Accomodation/>
      }
    ]
  )
  return(
      <RouterProvider router={router}/>
  )
}
export default App