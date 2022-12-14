import FormRow from "../../components/signIn/FormRow";
import StateButton from "../../components/signIn/stateButton";
import { useState } from "react";
import StudentAssignments from "./StudentGetAssignments";

const StudentData = ({ option }) => {
  const [selectState, setSelectState] = useState(false);
  const [selectData, setSelectData] = useState("");

  const getAssignment = async () => {
    let assID = document.getElementById("getAssID");

    const res = await fetch(
      `http://127.0.0.1:8000/api/viewAssignment/${assID.value}`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      }
    );
    const data = await res.json();
    setSelectState(true);
    setSelectData(data);
    console.log(data);
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
          <StudentAssignments option={selectState} data={selectData} />
        </div>
      );
    }
  }
};

export default StudentData;
