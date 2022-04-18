import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginSelectorPage from "./pages/auth/LoginSelectorPage";
import AdminRegisterPage from "./pages/auth/AdminRegisterPage";
import UserSignUpPage from "./pages/auth/UserSignUpPage";
import FindIdPage from "./pages/auth/FindIdPage";
import FindPasswordPage from "./pages/auth/FindPasswordPage";

import UserLoginPage from "./pages/auth/UserLoginPage";
import UserProfilePage from "./pages/auth/UserProfilePage";

import LibrariesListPage from "./pages/LibrariesListPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login-selector" element={<LoginSelectorPage />} />
      <Route path="/login" element={<UserLoginPage />} />
      <Route path="/signUp" element={<UserSignUpPage />} />
      <Route path="/find-id" element={<FindIdPage />} />
      <Route path="/find-pw" element={<FindPasswordPage />} />

      <Route path="/profile" element={<UserProfilePage />} />
      <Route path="/admin-register" element={<AdminRegisterPage />} />
      <Route path="/libraries/list" element={<LibrariesListPage />} />
    </Routes>
  );
}

export default App;
