import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Home from "../pages/Home";
import ErrorPage from "../components/ErrorPage";
import JobDetails from "../pages/JobDetails";
import AddJob from "../pages/AddJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        // loader:()=>fetch(`${import.meta.env.VITE_APP_URL}/jobs`)
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/job/:id",
        element: <JobDetails/>,
        loader:({params})=> fetch(`${import.meta.env.VITE_APP_URL}/job/${params.id}`)
      },
      {
        path:'/add-job',
        element:<AddJob/>
      }
    ],
  },
]);
export default router;
