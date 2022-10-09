import { React } from "react";

const FormRow = ({ title, inpType, inpName }) => {
  return (
    <div>
      <label>{title}</label>
      <input type={inpType} id={inpName} placeholder={title} />
    </div>
  );
};

export default FormRow;
