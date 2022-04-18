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

import NoticesPage from "./pages/board/NoticesPage";
import GuidePage from "./pages/board//GuidePage";
import BoardListPage from "./pages/board/BoardListPage";
import BoardDetailPage from "./pages/board/BoardDetailPage";

import LibrariesListPage from "./pages/LibrariesListPage";
import ReservationListPage from "./pages/lending/ReservationListPage";
import LendingRecordPage from "./pages/lending/LendingRecordPage";

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
      <Route path="/boards/list" element={<BoardListPage />} />
      <Route path="/boards/detail" element={<BoardDetailPage />} />

      <Route path="/profile" element={<UserProfilePage />} />

      <Route path="/libraries/list" element={<LibrariesListPage />} />
      <Route path="/reservation" element={<ReservationListPage />} />
      <Route path="/record" element={<LendingRecordPage />} />
    </Routes>
  );
}

export default App;
