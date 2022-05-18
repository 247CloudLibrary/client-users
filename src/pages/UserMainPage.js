import UserMain from "../containers/UserMain";
import { Link } from "react-router-dom";

const UserMainPage = () => {
  return (
    <div id="main">
      {localStorage.getItem("user") === null ? (
        <Link to="/login">로그인 하기</Link>
      ) : (
        <UserMain />
      )}
    </div>
  );
};

export default UserMainPage;
