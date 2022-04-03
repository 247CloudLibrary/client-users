import { Routes, Route } from "react-router-dom";
import UserLoginPage from "./pages/UserLoginPage";
import UserSignUpPage from "./pages/UserSignUpPage";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<UserLoginPage />} />
      <Route path="/signUp" element={<UserSignUpPage />} />
    </Routes>
  );
}

export default App;
