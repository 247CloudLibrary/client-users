import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginSelectorPage from "./pages/auth/LoginSelectorPage";
import AdminRegisterPage from "./pages/auth/AdminRegisterPage";
import UserSignUpPage from "./pages/auth/UserSignUpPage";
import FindIdPage from "./pages/auth/FindIdPage";
import FindPasswordPage from "./pages/auth/FindPasswordPage";

import UserLoginPage from "./pages/auth/UserLoginPage";
import UserProfilePage from "./pages/auth/UserProfilePage";
import UserMainPage from "./pages/UserMainPage";

import NoticesPage from "./pages/NoticesPage";
import GuidePage from "./pages/GuidePage";

import LibrariesListPage from "./pages/LibrariesListPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/main" element={<UserMainPage />} />
      <Route path="/login-selector" element={<LoginSelectorPage />} />
      <Route path="/login" element={<UserLoginPage />} />
      <Route path="/signUp" element={<UserSignUpPage />} />
      <Route path="/find-id" element={<FindIdPage />} />
      <Route path="/find-pw" element={<FindPasswordPage />} />
      <Route path="/admin-register" element={<AdminRegisterPage />} />

      <Route path="/notices" element={<NoticesPage />} />
      <Route path="/guide" element={<GuidePage />} />

      <Route path="/profile" element={<UserProfilePage />} />

      <Route path="/libraries/list" element={<LibrariesListPage />} />
    </Routes>
  );
}

export default App;
