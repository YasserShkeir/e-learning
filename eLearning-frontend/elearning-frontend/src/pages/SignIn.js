import { useState, useEffect, React } from "react";
import classes from "./SignIn.module.css";
import StateButton from "../components/signIn/stateButton";
import FormData from "../components/signIn/FormData";

function SignInPage() {
  const [selectState, setSelectState] = useState(false);

  const displaySignIn = () => {
    if (!selectState) {
      setSelectState(!selectState);
      console.log(selectState);
    }
  };

  const displaySignUp = () => {
    if (selectState) {
      setSelectState(!selectState);
      console.log(selectState);
    }
  };

  return (
    <div className={classes.mainForm}>
      <div className={classes.spaceBetween}>
        <StateButton text={"Sign In"} onClick={displaySignIn} />
        <StateButton text={"Sign Up"} onClick={displaySignUp} />
      </div>
      <FormData state={selectState} />
    </div>
  );
}

export default SignInPage;
