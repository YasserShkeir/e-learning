import "./App.css";
import { Route, Router, Routes } from "react-router-dom";

import SignInPage from "./pages/SignIn";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<SignInPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
