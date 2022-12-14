import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import image from "../../images/icon.png"
import logout from "../../Pages/LogOut/LogOut";

const Header = () => {
  
  const {user, setUser} = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    setUser(null);
  }

    const menuItems = <>
        <li className="font-simebold"><Link to='/'>Home</Link></li>
        {
          user?.email? 
          <div className="flex justify-between items-center">
              <li className="font-simebold"><Link to='/addservice'>Add Service</Link></li>
              <li className="font-simebold"><Link to='/my-reviews'>My reviews</Link></li>
              <li className="font-simebold"><Link to='/login' onClick={handleLogout}>Logout</Link></li>
          </div>
           : 
          <li className="font-simebold"><Link to='/login'>Login</Link></li>
        }
        
        
        <li className="font-simebold"><Link to='/blogs'>Blogs</Link></li>
    </>

  return (
    <div className="navbar h-24 mb-12 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        {/* <Link to="/" className="btn btn-ghost normal-case text-xl"><img className="w-2/6" src={image} alt="" /></Link> */}
        <div className="d-flex">
          <img className="w-1/4 " src={image} alt="" />
          <h1 className="text-3xl">CorePhotography</h1>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
         {menuItems}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Get started</a>
      </div>
    </div>
  );
};

export default Header;
