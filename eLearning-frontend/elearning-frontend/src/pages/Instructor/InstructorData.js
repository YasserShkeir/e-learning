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

  const updateStudentController = async () => {
    let data = {
      id: document.getElementById("updStudentName").value,
      course: document.getElementById("updStudentCourse").value,
      type: document.getElementById("updStudentType").value,
    };

    const res = await axios
      .post("http://127.0.0.1:8000/api/updateStudentCourses", data, {
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

  const addAssignmentController = async () => {
    let data = {
      title: document.getElementById("addAssTitle").value,
      courseCode: document.getElementById("addAssCourse").value,
      dueDate: document.getElementById("addAssDate").value,
      tasks: document.getElementById("addAssTasks").value,
    };

    const res = await axios
      .post("http://127.0.0.1:8000/api/createAssignment", data, {
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

  const addAnnouncementController = async () => {
    let data = {
      title: document.getElementById("addAnnTitle").value,
      courseCode: document.getElementById("addAnnCourse").value,
      text: document.getElementById("addAnnTasks").value,
    };

    const res = await axios
      .post("http://127.0.0.1:8000/api/createAnnouncement", data, {
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

  if (option === 1) {
    return (
      <div>
        <h2>Update Student Courses:</h2>
        <FormRow
          title="Add Student ID"
          inpType="text"
          inpName="updStudentName"
        />
        <FormRow
          title="Course to be Added"
          inpType="text"
          inpName="updStudentCourse"
        />
        <FormRow
          title="Add Type (del or add)"
          inpType="text"
          inpName="updStudentType"
        />
        <StateButton
          text={"Update Courses"}
          onClick={updateStudentController}
        />
      </div>
    );
  }

  if (option === 2) {
    return (
      <div>
        <h2>Create Assignment:</h2>
        <FormRow
          title="Assignment Title"
          inpType="text"
          inpName="addAssTitle"
        />
        <FormRow
          title="Assignment Course Code"
          inpType="text"
          inpName="addAssCourse"
        />
        <FormRow title="Tasks" inpType="text" inpName="addAssTasks" />
        <FormRow title="Due Date" inpType="date" inpName="addAssDate" />

        <StateButton
          text={"Update Courses"}
          onClick={addAssignmentController}
        />
      </div>
    );
  }

  if (option === 3) {
    return (
      <div>
        <h2>Create Announcement:</h2>
        <FormRow
          title="Announcement Title"
          inpType="text"
          inpName="addAnnTitle"
        />
        <FormRow
          title="Assignment Course Code"
          inpType="text"
          inpName="addAnnCourse"
        />
        <FormRow title="Text" inpType="text" inpName="addAnnTasks" />

        <StateButton
          text={"Update Courses"}
          onClick={addAnnouncementController}
        />
      </div>
    );
  }
};

export default InstructorData;
