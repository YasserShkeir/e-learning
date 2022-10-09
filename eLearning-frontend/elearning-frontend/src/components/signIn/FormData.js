import { React } from "react";
import FormRow from "../signIn/FormRow";
import { Navigate, useNavigate } from "react-router-dom";

const FormData = ({ state }) => {
  let navigate = useNavigate();
  // Success Router
  const successRouter = (userType) => {
    if (userType == 1) {
      console.log("Going to Admin Portal...");
      navigate("/admin");
      <Navigate replace to="/admin" />;
    }
    if (userType == 2) {
      console.log("Going to Instructor Portal...");
    }
    if (userType == 3) {
      console.log("Going to Student Portal...");
    }
  };

  // Call Sign In Here
  const callSignIn = async () => {
    let email = document.getElementById("signInEmail");
    let password = document.getElementById("signInPassword");
    let task = {
      email: email.value,
      password: password.value,
    };

    const res = await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();

    if (data.authorisation.token) {
      localStorage.setItem("id", data.user._id);
      localStorage.setItem("jwt", data.authorisation.token);
      successRouter(data.user.userType);
    }
  };

  const callSignUp = async () => {
    let name = document.getElementById("signUpName");
    let email = document.getElementById("signUpEmail");
    let password = document.getElementById("signUpPassword");
    let task = {
      name: name.value,
      email: email.value,
      password: password.value,
    };

    const res = await fetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();

    if (data.authorisation.token) {
      localStorage.setItem("id", data.user._id);
      localStorage.setItem("jwt", data.authorisation.token);
      successRouter(data.user.userType);
    }
  };

  if (!state) {
    return (
      <div>
        <h1>Sign Up</h1>
        <FormRow title="Name" inpType="text" inpName="signUpName" />
        <FormRow title="Email" inpType="email" inpName="signUpEmail" />
        <FormRow title="Password" inpType="password" inpName="signUpPassword" />
        <button onClick={callSignUp}>Sign Up</button>
      </div>
    );
  }
  return (
    <div>
      <h1>Sign In</h1>
      <FormRow title="Email" inpType="email" inpName="signInEmail" />
      <FormRow title="Password" inpType="password" inpName="signInPassword" />
      <button onClick={callSignIn}>Sign In</button>
    </div>
  );
};

export default FormData;
