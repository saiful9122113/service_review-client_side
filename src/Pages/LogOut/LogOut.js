import React from "react";
import { getAuth, signOut } from "firebase/auth";

const LogOut = () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {})
    .catch((error) => {
      console.log(error);
    });

  return <div></div>;
};

export default LogOut;
