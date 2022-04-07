import { Routes, Route } from "react-router-dom";
import UserLoginPage from "./pages/UserLoginPage";
import UserProfilePage from "./pages/UserProfilePage";
import UserSignUpPage from "./pages/UserSignUpPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserLoginPage />} />
      <Route path="/profile" element={<UserProfilePage />} />
      <Route path="/signUp" element={<UserSignUpPage />} />
    </Routes>
  );
}

export default App;
