import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserLoginPage from "./pages/UserLoginPage";
import UserProfilePage from "./pages/UserProfilePage";
import UserSignUpPage from "./pages/UserSignUpPage";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<UserLoginPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<UserProfilePage />} />
      <Route path="/signUp" element={<UserSignUpPage />} />
    </Routes>
  );
}

export default App;
