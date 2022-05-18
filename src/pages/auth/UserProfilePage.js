import ProfileForm from "../../containers/auth/ProfileForm";
import { Link } from "react-router-dom";

const UserProfilePage = () => {
  return (
    <div id="user-profile">
      {localStorage.getItem("user") === null ? (
        <Link to="/login">로그인 하기</Link>
      ) : (
        <ProfileForm />
      )}
    </div>
  );
};

export default UserProfilePage;
