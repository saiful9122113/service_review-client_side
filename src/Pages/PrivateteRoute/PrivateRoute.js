import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <h1 className='text-5xl'>Loading...</h1>
    }
    
    if(user){
        return children;
    }
    
    return <Navigate state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;








// import { getAuth } from "firebase/auth";
// import React,{useContext} from "react"; 
//  import { Navigate, useLocation, useNavigate } from "react-router-dom"; 
// //  import { logout } from "./logout"; 
// import app from "../../firebase/firebase.config";
// import { AuthContext } from "../../contexts/AuthProvider";
  
//  const PrivateRoute = ({ children }) => { 
//   const {user}=useContext(AuthContext)
//    const navigate = useNavigate(); 
//    const location = useLocation(); 
//    const auth = getAuth(app)
  
//    return auth?.currentUser?.accessToken ? ( 
//      children 
//    ) : ( 
//      <Navigate to="/login"  state={{ from: location }} replace /> 
//    ); 
//  }; 
  
//  export default PrivateRoute;