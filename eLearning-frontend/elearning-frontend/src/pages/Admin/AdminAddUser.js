import FormRow from "../../components/signIn/FormRow";
import classes from "./Admin.module.css";
import StateButton from "../../components/signIn/stateButton";
import axios from "axios";

const AdminAddUser = (option) => {
  const addUserCaller = async (userType) => {
    let data = {
      name: document.getElementById("addUserName").value,
      email: document.getElementById("addUserEmail").value,
      password: document.getElementById("addUserEmail").value,
      userType: userType,
    };

    const res = await axios.post(
      "http://127.0.0.1:8000/api/addUser",
      {
        name: document.getElementById("addUserName").value,
        email: document.getElementById("addUserEmail").value,
        password: document.getElementById("addUserEmail").value,
        userType: option.option,
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      }
    );
  };

  //
  if (option.option == 1 || option.option == 2 || option.option == 3) {
    const commonForm = () => {
      return (
        <div>
          <FormRow title="Name" inpType="text" inpName="addUserName" />
          <FormRow title="Email" inpType="email" inpName="addUserEmail" />
          <FormRow title="Password" inpType="password" inpName="addUserPass" />
        </div>
      );
    };
    if (option.option == 1) {
      return (
        <>
          <h3>Add Admin</h3>
          <div className={classes.adminInput}>{commonForm()}</div>
          <StateButton text={"Add User"} onClick={addUserCaller} />
        </>
      );
    }
    if (option.option == 2) {
      return (
        <>
          <h3>Add Instructor</h3>
          {commonForm()}
          <StateButton text={"Add User"} onClick={addUserCaller} />
        </>
      );
    }
    if (option.option == 3) {
      return (
        <>
          <h3>Add Student</h3>
          {commonForm()}
        </>
      );
    }
  }

  return <h1>Waiting for Input</h1>;
};

export default AdminAddUser;
