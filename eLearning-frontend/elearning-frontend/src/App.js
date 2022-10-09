import "./App.css";
import { Route, Router, Routes } from "react-router-dom";

import SignInPage from "./pages/SignIn";
import AdminPage from "./pages/Admin/Admin";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
