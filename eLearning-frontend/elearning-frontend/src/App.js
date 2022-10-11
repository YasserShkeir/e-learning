import "./App.css";
import { Route, Router, Routes } from "react-router-dom";

import SignInPage from "./pages/SignIn";
import AdminPage from "./pages/Admin/Admin";
import InstructorPage from "./pages/Instructor/Instructor";
import StudentPage from "./pages/Student/Student";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/instructor" element={<InstructorPage />} />
        <Route path="/student" element={<StudentPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
