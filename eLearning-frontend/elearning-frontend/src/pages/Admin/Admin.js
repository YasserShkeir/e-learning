import { useState, React } from "react";
import { Navigate } from "react-router-dom";
import StateButton from "../../components/signIn/stateButton";
import classes from "./Admin.module.css";
import AdminData from "./AdminData";
import axios from "axios";

function AdminPage() {
  const [selectState, setSelectState] = useState(0);

  const displayGetUsers = () => {
    if (selectState != 0) {
      setSelectState(0);
    }
  };

  const caller = (user) => {
    if (user._id && user.userType == 1) {
      return (
        <div className={classes.adminContent}>
          <h1>Welcome Back, {user.name}</h1>
          <div className={classes.spaceBetween}>
            <StateButton text={"Get User(s)"} onClick={displayGetUsers} />
            <StateButton text={"Get Sorted Users"} onClick={displayGetUsers} />
            <StateButton text={"Add User"} onClick={displayGetUsers} />
            <StateButton text={"Get Course(s)"} onClick={displayGetUsers} />
            <StateButton text={"Add Course"} onClick={displayGetUsers} />
          </div>
        </div>
      );
    }
    return <Navigate replace to="/" />;
  };

  let res = localStorage.getItem("currUser");
  let currUser = JSON.parse(res);

  return caller(currUser);
}

export default AdminPage;
