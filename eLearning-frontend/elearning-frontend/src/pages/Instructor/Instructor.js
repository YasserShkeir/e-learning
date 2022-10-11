import { useState } from "react";

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
          <div>Good</div>
        </div>
      );
    }
  };

  let res = localStorage.getItem("currUser");
  let currUser = JSON.parse(res);

  return caller(currUser);
};

export default InstructorPage;
