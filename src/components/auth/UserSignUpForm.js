import { Link } from "react-router-dom";
import { WiCloud } from "react-icons/wi";

const UserSignUpForm = () => {
  return (
    <div className="signUpForm">
      <Link to={"/"} className="logo">
        <WiCloud />
        <span>Cloud Library</span>
      </Link>
      <form>
        <input placeholder="아이디" required />
        <input type="password" placeholder="비밀번호" required />
        <input placeholder="이름" required />
        <input placeholder="성별" required />
        <input type="date" date-placeholder="생년월일" required />
        <input type="email" placeholder="Email" required />
        <input
          type="tel"
          pattern="[0-9]{2,}-[0-9]{3,}-[0-9]{3,}"
          placeholder="연락처 ex)010-0000-0000"
          required
        />
        <button className="signUp-btn">회원가입</button>
      </form>
      <footer>
        <Link to="/login">
          <span>로그인</span>
        </Link>
      </footer>
    </div>
  );
};

export default UserSignUpForm;
