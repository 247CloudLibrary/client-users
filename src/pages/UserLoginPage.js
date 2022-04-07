import UserLoginForm from "../components/auth/UserLoginForm";
import { Link } from "react-router-dom";

const UserLoginPage = () => {
  return (
    <div>
      <UserLoginForm />
      <Link to="/profile">
        <h2>Profile</h2>
      </Link>
    </div>
  );
};

export default UserLoginPage;
