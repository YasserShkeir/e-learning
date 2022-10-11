import axios from "axios";
import FormRow from "../../components/signIn/FormRow";
import StateButton from "../../components/signIn/stateButton";

const InstructorData = ({ option }) => {
  const addStudentCaller = async () => {
    let data = {
      name: document.getElementById("addStudentName").value,
      email: document.getElementById("addStudentEmail").value,
      password: document.getElementById("addStudentPass").value,
      enrolledCourses: [document.getElementById("addStudentCourse").value],
      assignments: [document.getElementById("addStudentAssignments").value],
    };

    console.log(data);

    const res = await axios
      .post("http://127.0.0.1:8000/api/addStudent", data, {
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

  if (option === 0) {
    return (
      <div>
        <h2>Add Student:</h2>
        <FormRow
          title="Add Student Name"
          inpType="text"
          inpName="addStudentName"
        />
        <FormRow
          title="Add Student Email"
          inpType="email"
          inpName="addStudentEmail"
        />
        <FormRow
          title="Add Student Password"
          inpType="password"
          inpName="addStudentPass"
        />
        <FormRow
          title="Add Student Courses"
          inpType="text"
          inpName="addStudentCourse"
        />
        <FormRow
          title="Add Student Assignments"
          inpType="text"
          inpName="addStudentAssignments"
        />
        <StateButton text={"Add Course"} onClick={addStudentCaller} />
      </div>
    );
  }
};

export default InstructorData;