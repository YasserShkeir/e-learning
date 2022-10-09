import { React } from "react";
import FormRow from "../signIn/FormRow";

const FormData = ({ state }) => {
  if (!state) {
    return (
      <div>
        <h1>Sign Up</h1>
        <FormRow title="Email" inpType="email" inpName="signInEmail" />
        <FormRow title="Password" inpType="password" inpName="signInPassword" />
      </div>
    );
  }
  return <h1>Sign In</h1>;
};

export default FormData;
