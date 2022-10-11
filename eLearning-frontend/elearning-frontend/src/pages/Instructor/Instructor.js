import { useState } from "react";
import StateButton from "../../components/signIn/stateButton";
import InstructorData from "./InstructorData";
import { Navigate } from "react-router-dom";

const InstructorPage = () => {
  const [selectState, setSelectState] = useState(0);

  const displayAddStudent = () => {
    if (selectState !== 0) {
      setSelectState(0);
    }
  };

  const displayUpdStudentCourse = () => {
    if (selectState !== 1) {
      setSelectState(1);
    }
  };

  const displayCreateAssignment = () => {
    if (selectState !== 2) {
      setSelectState(2);
    }
  };

  const displayCreateAnnouncement = () => {
    if (selectState !== 3) {
      setSelectState(3);
    }
  };

  const caller = (user) => {
    if (localStorage.getItem("jwt") && user._id && user.userType == 2) {
      return (
        <div>
          <h1>Welcome Back, {user.name}</h1>
          <div>
            <StateButton text={"Add Student"} onClick={displayAddStudent} />
            <StateButton
              text={"Update Student Course"}
              onClick={displayUpdStudentCourse}
            />
            <StateButton
              text={"Create Assignment"}
              onClick={displayCreateAssignment}
            />
            <StateButton
              text={"Create Announcement"}
              onClick={displayCreateAnnouncement}
            />
          </div>
          <InstructorData option={selectState} />
        </div>
      );
    }
    return <Navigate replace to="/" />;
  };

  let res = localStorage.getItem("currUser");
  let currUser = JSON.parse(res);

  return caller(currUser);
};

export default InstructorPage;
