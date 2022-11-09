import Main from "../../Layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Services from "../../Pages/Services/Services";
import Signup from "../../Pages/Signup/Signup";
import Reviews from "../../Reviews/Reviews";

const { createBrowserRouter } = require("react-router-dom");

 const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },

        {
          path: '/login',
          element: <Login></Login>
        },

        {
          path: '/signup',
          element: <Signup></Signup>
        },

        {
          path: '/services',
          element: <Services></Services>
        },

        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },

        {
          path: '/checkout/:id',
          element: <CheckOut></CheckOut>,
          loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },

        {
          path: '/review',
          element: <Reviews></Reviews>
        }
      ]
    },

    {
      path:'/*',
      element: <ErrorPage></ErrorPage>
    }
    
  ])

  export default router;