import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Home from "../pages/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    // errorElement:
    children: [
        {
          path:'/',
          element:<Home/>
        }
      ,{
        path: "/login",
        element: <Login></Login>,
      },
      {
        path:'/registration',
        element:<Registration></Registration>
      }
    ],
  },
]);
export default router;