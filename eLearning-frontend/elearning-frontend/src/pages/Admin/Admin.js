import { React } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

function AdminPage() {
  const caller = (user) => {
    if (user._id && user.userType == 1) {
      return (
        <div>
          <h1>Welcome Back, {user.name}</h1>
        </div>
      );
    }
    return <Navigate replace to="/" />;
  };

  let res = localStorage.getItem("currUser");
  let currUser = JSON.parse(res);

  console.log(currUser);

  return caller(currUser);
}

export default AdminPage;
