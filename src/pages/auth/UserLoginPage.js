import LoginForm from "../../containers/auth/LoginForm";
import { Link } from "react-router-dom";

const UserLoginPage = () => {
  return (
    <div id="login">
      {localStorage.getItem("user") === null ? (
        <LoginForm />
      ) : (
        <Link to="/main">메인페이지로 이동</Link>
      )}
    </div>
  );
};

export default UserLoginPage;
