import "./App.css";
import { Signin } from "./pages/SignIn";
import { HomePage } from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import { RegisterPage } from "./pages/RegisterPage";
import AdminPage from "./pages/AdminPage/AdminPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signIn" element={<Signin />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/adminPage" element={<AdminPage />} />
      </Routes>
    </>
  );
}

export default App;
