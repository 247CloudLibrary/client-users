import { Routes, Route } from "react-router-dom";
import UserLoginPage from "./pages/UserLoginPage";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<UserLoginPage />} />
    </Routes>
  );
}

export default App;
