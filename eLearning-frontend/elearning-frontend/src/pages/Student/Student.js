import { Navigate } from "react-router-dom";
import StateButton from "../../components/signIn/stateButton";
import { useState } from "react";
import StudentData from "./StudentData";

const StudentPage = () => {
  const [selectState, setSelectState] = useState(0);

  const viewAssignments = () => {
    if (selectState !== 0) {
      setSelectState(0);
    }
  };

  const caller = (user) => {
    if (localStorage.getItem("jwt") && user._id && user.userType == 1) {
      return (
        <div>
          <h1>Welcome Back, {user.name}</h1>
          <div>
            <StateButton text={"View Assignments"} onClick={viewAssignments} />
          </div>
          <StudentData option={selectState} />
        </div>
      );
    }
    return <Navigate replace to="/" />;
  };

  let res = localStorage.getItem("currUser");
  let currUser = JSON.parse(res);

  return caller(currUser);
};

export default StudentPage;
