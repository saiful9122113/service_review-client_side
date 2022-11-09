import Main from "../../Layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Services from "../../Pages/Services/Services";
import Signup from "../../Pages/Signup/Signup";

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
      ]
    } 
  ])

  export default router;