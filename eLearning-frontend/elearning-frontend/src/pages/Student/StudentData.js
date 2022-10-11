import FormRow from "../../components/signIn/FormRow";
import StateButton from "../../components/signIn/stateButton";
import { useState } from "react";
import StudentAssignments from "./StudentGetAssignments";

const StudentData = ({ option }) => {
  const [selectState, setSelectState] = useState(false);

  const getAssignment = async () => {
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
  };

  if (localStorage.getItem("jwt")) {
    if (option === 0) {
      return (
        <div>
          <h2>Get Assignments:</h2>
          <div>
            <FormRow title="Assignment ID" inpType="text" inpName="getAssID" />
            <StateButton
              text={!selectState ? <>Search ID</> : <>Hide</>}
              onClick={getAssignment}
            />
          </div>
          <StudentAssignments option={selectState} data={""} />
        </div>
      );
    }
  }
};

export default StudentData;
