import { Link } from "react-router-dom";

const UserLoginForm = () => {
  return (
    <div>
      <h3>User Login Form</h3>
      <form>
        <input placeholder="아이디" />
        <input type="password" placeholder="비밀번호" />
        <button>로그인</button>
      </form>
      <Link to="/signUp">회원가입</Link>
      <Link to="/">아이디 찾기</Link>
      <Link to="/">비밀번호 찾기</Link>
    </div>
  );
};

export default UserLoginForm;
