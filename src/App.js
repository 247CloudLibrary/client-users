import { Routes, Route } from "react-router-dom";
import UserLoginPage from "./pages/UserLoginPage";
import UserProfilePage from "./pages/UserProfilePage";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<UserLoginPage />} />
      <Route path="/profile" element={<UserProfilePage />} />
    </Routes>
  );
}

export default App;
