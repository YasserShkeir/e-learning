import classes from "./Admin.module.css";
import FormRow from "../../components/signIn/FormRow";
import { useState } from "react";
import AdminGetUsers from "./AdminGetUsers";
import AdminAddUser from "./AdminAddUser";
import AdminGetCourses from "./AdminGetCourses";
import StateButton from "../../components/signIn/stateButton";
import axios from "axios";

const AdminData = ({ option }) => {
  const [selectUState, setSelectUState] = useState(false);
  const [selectCState, setSelectCState] = useState(false);
  const [userTypeState, setUserTypeState] = useState(0);
  const [userData, setUserData] = useState("");
  const [courseData, setCourseData] = useState("");

  const callGetUsers = async () => {
    let userID = document.getElementById("getUsersID");

    const res = await fetch(
      `http://127.0.0.1:8000/api/getUsers/${userID.value}`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      }
    );
    const data = await res.json();
    console.log(data);
    setUserData(data);
    setSelectUState(!selectUState);
  };

  const callGetSorted = async () => {
    let getUserTypeID = document.getElementById("getUserTypeID");

    const res = await axios
      .post(
        "http://127.0.0.1:8000/api/getsorted",
        { userType: getUserTypeID.value },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("jwt"),
          },
        }
      )
      .then((response) => {
        setUserTypeState(getUserTypeID.value);
        setUserData(response.data);
      });
  };

  const userAdderHandler = async () => {
    let addUserTypeID = document.getElementById("addUserTypeID");
    setUserTypeState(addUserTypeID.value);
  };

  const callGetCourses = async () => {
    let courseID = document.getElementById("getCoursesID");

    const res = await fetch(
      `http://127.0.0.1:8000/api/getCourses/${courseID.value}`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      }
    );

    const data = await res.json();
    setCourseData(data);
    setSelectCState(!selectCState);
  };

  const addCourseCaller = async () => {
    let data = {
      code: document.getElementById("addCourseCode").value,
      name: document.getElementById("addCourseName").value,
      credits: parseInt(document.getElementById("addCourseCredits").value),
    };

    console.log(data);

    const res = await axios
      .post("http://127.0.0.1:8000/api/addCourse", data, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  if (localStorage.getItem("jwt")) {
    if (option === 0) {
      return (
        <div className={classes.adminOption}>
          <h2>Get Users:</h2>
          <div className={classes.adminInput}>
            <FormRow title="User ID" inpType="text" inpName="getUsersID" />
            <button onClick={callGetUsers}>
              {!selectUState ? <>Search ID</> : <>Hide</>}
            </button>
          </div>
          <AdminGetUsers option={selectUState} data={userData} />
        </div>
      );
    }
    if (option === 1) {
      return (
        <div className={classes.adminOption}>
          <h2>Get Sorted Users:</h2>
          <div className={classes.adminInput}>
            <label>Sort User:</label>
            <select onChange={callGetSorted} id="getUserTypeID">
              <option value={userTypeState}>Select...</option>
              <option value="1">Admins</option>
              <option value="2">Instructors</option>
              <option value="3">Students</option>
            </select>
          </div>
          <AdminGetUsers option={userTypeState} data={userData} />
        </div>
      );
    }
    if (option === 2) {
      return (
        <div className={classes.adminOption}>
          <h2>Add User:</h2>
          <div className={classes.adminInput}>
            <label>Select User Type to be Added:</label>
            <select onChange={userAdderHandler} id="addUserTypeID">
              <option value={userTypeState}>Select...</option>
              <option value="1">Admin</option>
              <option value="2">Instructor</option>
              <option value="3">Student</option>
            </select>
          </div>
          <AdminAddUser option={userTypeState} />
        </div>
      );
    }
    if (option === 3) {
      return (
        <div>
          <div className={classes.adminOption}>
            <h2>Get Courses:</h2>
            <div className={classes.adminInput}>
              <FormRow
                title="Course ID"
                inpType="text"
                inpName="getCoursesID"
              />
              <button onClick={callGetCourses}>
                {!selectCState ? <>Search ID</> : <>Hide</>}
              </button>
            </div>
          </div>
          <AdminGetCourses option={selectCState} data={courseData} />
        </div>
      );
    }
    if (option === 4) {
      return (
        <div className={classes.adminOption}>
          <h2>Add Course:</h2>
          <div className={classes.adminInput}>
            <FormRow
              title="Add Course Code"
              inpType="text"
              inpName="addCourseCode"
            />
            <FormRow
              title="Add Course Name"
              inpType="text"
              inpName="addCourseName"
            />
            <FormRow
              title="Add Course Credits"
              inpType="number"
              inpName="addCourseCredits"
            />
            <StateButton text={"Add Course"} onClick={addCourseCaller} />
          </div>
        </div>
      );
    }
  }

  return (
    <div>
      <h1>Error</h1>
    </div>
  );
};

export default AdminData;
