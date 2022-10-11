import FormRow from "../../components/signIn/FormRow";
import classes from "./Admin.module.css";
import StateButton from "../../components/signIn/stateButton";
import axios from "axios";

const AdminAddUser = (option) => {
  const addUserCaller = async () => {
    let data = {
      name: document.getElementById("addUserName").value,
      email: document.getElementById("addUserEmail").value,
      password: document.getElementById("addUserPass").value,
      userType: option.option,
    };

    if (option.option == 2) {
      data["courses"] = [document.getElementById("addInstructorCourses").value];
    }

    if (option.option == 3) {
      data["enrolledCourses"] = [
        document.getElementById("addStudentCourses").value,
      ];
      data["assignments"] = [
        document.getElementById("addStudentAssignments").value,
      ];
    }

    console.log();

    const res = await axios
      .post("http://127.0.0.1:8000/api/addUser", data, {
        headers: {
          ContentType: "application/x-www-form-urlencoded;charset=UTF-8",
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
          <div className={classes.adminInput}>
            {commonForm()}
            <div className={classes.flexStart}>
              <FormRow
                title="Courses"
                inpType="text"
                inpName="addInstructorCourses"
              />
            </div>
          </div>
          <StateButton text={"Add User"} onClick={addUserCaller} />
        </>
      );
    }
    if (option.option == 3) {
      return (
        <>
          <h3>Add Student</h3>
          <div className={classes.adminInput}>
            {commonForm()}
            <div className={classes.flexStart}>
              <FormRow
                title="Enrolled Courses"
                inpType="text"
                inpName="addStudentCourses"
              />
              <FormRow
                title="Assignments"
                inpType="text"
                inpName="addStudentAssignments"
              />
            </div>
          </div>
          <StateButton text={"Add User"} onClick={addUserCaller} />
        </>
      );
    }
  }

  return <h1>Waiting for Input</h1>;
};

export default AdminAddUser;
