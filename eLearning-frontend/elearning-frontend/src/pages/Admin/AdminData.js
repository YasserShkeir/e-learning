import classes from "./Admin.module.css";
import FormRow from "../../components/signIn/FormRow";
import { useState } from "react";
import AdminGetUsers from "./AdminGetUsers";

const AdminData = ({ option }) => {
  const [selectState, setSelectState] = useState(false);
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
    setUserData(data);
    setSelectState(!selectState);
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
        <div>
          <h1>1</h1>
        </div>
      );
    }
    if (option === 2) {
      return (
        <div>
          <h1>2</h1>
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
