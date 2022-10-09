import { React } from "react";
import { Navigate } from "react-router-dom";

function AdminPage() {
  let id = localStorage.getItem("id");
  if (!id) {
    return <Navigate replace to="/" />;
  } else {
    return <div>{id}</div>;
  }
}

export default AdminPage;
