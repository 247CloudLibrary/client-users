import { ImLibrary } from "react-icons/im";
import { FaUser } from "react-icons/fa";

const LoginSelectorForm = ({ user }) => {
  return (
    <div id="selector">
      <div className="admin">
        <div className="select-box">
          <ImLibrary className="icon" />
          <span className="text">관리자</span>
        </div>
      </div>

      <div className="users">
        <div className="select-box" onClick={user}>
          <FaUser className="icon" />
          <span className="text">일반회원</span>
        </div>
      </div>
    </div>
  );
};

export default LoginSelectorForm;
