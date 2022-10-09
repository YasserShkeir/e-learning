import { React } from "react";
import FormRow from "../signIn/FormRow";

const FormData = ({ state }) => {
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
      localStorage.setItem("jwt", data.authorisation.token);
      console.log(data);
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
      localStorage.setItem("jwt", data.authorisation.token);
      console.log(data);
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
