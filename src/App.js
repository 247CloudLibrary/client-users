import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginSelectorPage from "./pages/auth/LoginSelectorPage";
import AdminRegisterPage from "./pages/auth/AdminRegisterPage";
import UserSignUpPage from "./pages/auth/UserSignUpPage";
import FindIdPage from "./pages/auth/FindIdPage";
import FindPwPage from "./pages/auth/FindPwPage";
import ChangePasswordPage from "./pages/auth/ChangePasswordPage";

import UserLoginPage from "./pages/auth/UserLoginPage";
import UserProfilePage from "./pages/auth/UserProfilePage";
import UserMainPage from "./pages/UserMainPage";

import NoticesPage from "./pages/board/NoticesPage";
import NoticesDetail from "./components/board/NoticesDetail";
import GuidePage from "./pages/board//GuidePage";
import BoardListPage from "./pages/board/BoardListPage";
import BoardDetailPage from "./pages/board/BoardDetailPage";

import LibrariesListPage from "./pages/libraries/LibrariesListPage";
import LibrariesDetailPage from "./pages/libraries/LibrariesDetailPage";
import LibraryMainPage from "./pages/libraries/LibraryMainPage";
import ReservationListPage from "./pages/lending/ReservationListPage";
import LendingRecordPage from "./pages/lending/LendingRecordPage";

import CompositeListPage from "./pages/composite/CompositeListPage";
import CompositeDetailPage from "./pages/composite/CompositeDeatailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/main" element={<UserMainPage />} />
      <Route path="/login-selector" element={<LoginSelectorPage />} />
      <Route path="/login" element={<UserLoginPage />} />
      <Route path="/signUp" element={<UserSignUpPage />} />
      <Route path="/find-id" element={<FindIdPage />} />
      <Route path="/find-pw" element={<FindPwPage />} />
      <Route path="/admin-register" element={<AdminRegisterPage />} />
      <Route path="/change-pw" element={<ChangePasswordPage />} />

      <Route path="/composite-list" element={<CompositeListPage />} />
      <Route
        path="/composite-detail/:bookId"
        element={<CompositeDetailPage />}
      />

      <Route path="/notices" element={<NoticesPage />} />
      <Route path="/notices/detail/:id" element={<NoticesDetail />} />
      <Route path="/guide" element={<GuidePage />} />

      <Route path="/boards/list/:id" element={<BoardListPage />} />
      <Route path="/boards/detail/:id" element={<BoardDetailPage />} />

      <Route path="/profile" element={<UserProfilePage />} />

      <Route path="/libraries/list" element={<LibrariesListPage />} />
      <Route path="/library/:id" element={<LibraryMainPage />} />
      <Route path="/library/detail/:id" element={<LibrariesDetailPage />} />
      <Route path="/reservation" element={<ReservationListPage />} />
      <Route path="/record" element={<LendingRecordPage />} />
    </Routes>
  );
}

export default App;
