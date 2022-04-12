import { Link } from "react-router-dom";
import { WiCloud } from "react-icons/wi";

const UserLoginForm = ({ form, onChange, onSubmit }) => {
  return (
    <div className="loginForm">
      <Link to={"/"} className="logo">
        <WiCloud />
        <span>Cloud Library</span>
      </Link>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="아이디"
          name="userId"
          onChange={onChange}
          value={form.userId}
        />
        <input
          onChange={onChange}
          value={form.password}
          name="password"
          type="password"
          placeholder="비밀번호"
        />
        <button className="login-btn">로그인</button>
        <Link to="/signUp">
          <button>회원가입 </button>
        </Link>
      </form>
      <footer>
        <Link to="/">
          <span>아이디찾기</span>
        </Link>
        <Link to="/">
          <span>비밀번호찾기</span>
        </Link>
      </footer>
    </div>
  );
};

export default UserLoginForm;
