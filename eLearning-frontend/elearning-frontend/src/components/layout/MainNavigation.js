import classes from "./MainNavigation.module.css";
import StateButton from "../signIn/stateButton";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function MainNavigation() {
  const [selectState, setSelectState] = useState(false);

  const logout = () => {
    setSelectState(true);
    localStorage.clear();
  };

  const logoutDisplayer = () => {
    if (localStorage.getItem("jwt") && !selectState) {
      return <StateButton text={"Logout"} onClick={logout} />;
    }

    if (selectState && !localStorage.getItem("jwt")) {
      <Navigate replace to="/" />;
    }
  };

  return (
    <header>
      <div>E-Learning Portal</div>
      {localStorage.getItem("jwt") ? console.log("here") : console.log("not")}
      {logoutDisplayer()}
    </header>
  );
}

export default MainNavigation;
