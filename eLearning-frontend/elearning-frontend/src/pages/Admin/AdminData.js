import classes from "./Admin.module.css";
import FormRow from "../../components/signIn/FormRow";
import { useState } from "react";
import AdminGetUsers from "./AdminGetUsers";
import axios from "axios";

const AdminData = ({ option }) => {
  const [selectState, setSelectState] = useState(false);
  const [userTypeState, setUserTypeState] = useState(0);
  const [userData, setUserData] = useState("");

  const callGetUsers = async () => {
    let userID = document.getElementById("getUsersID");

    if (userID.value) {
      userID.value = "/" + userID.value;
    }

    const res = await fetch(
      `http://127.0.0.1:8000/api/getUsers${userID.value}`,
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
    setSelectState(!selectState);
  };

  const callGetSorted = async () => {
    let getSortedID = document.getElementById("getSortedID");

    const res = await axios
      .post(
        "http://127.0.0.1:8000/api/getsorted",
        { userType: getSortedID.value },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("jwt"),
          },
        }
      )
      .then((response) => {
        setUserTypeState(getSortedID.value);
        setUserData(response.data);
        console.log(userData);
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
              {!selectState ? <>Search ID</> : <>Hide</>}
            </button>
          </div>
          <AdminGetUsers option={selectState} data={userData} />
        </div>
      );
    }
    if (option === 1) {
      return (
        <div className={classes.adminOption}>
          <h2>Get Sorted Users:</h2>
          <div className={classes.adminInput}>
            <label>Sort User:</label>
            <select onChange={callGetSorted} id="getSortedID">
              <option value="0">Select...</option>
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
        <div>
          <h1>{console.log(userData)}</h1>
        </div>
      );
    }
    if (option === 3) {
      return (
        <div>
          <h1>3</h1>
        </div>
      );
    }
    if (option === 4) {
      return (
        <div>
          <h1>4</h1>
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
