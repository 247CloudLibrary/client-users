import { Link } from "react-router-dom";

const UserSignUpForm = () => {
  return (
    <div>
      <h3>UserSignUpForm</h3>
      <form>
        <input placeholder="아이디" />
        <input type="password" placeholder="비밀번호" />
        <input placeholder="이름" />
        <input placeholder="성별" />
        <input type="date" placeholder="생년월일" />
        <input type="email" placeholder="Email" />
        <input
          type="tel"
          pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
          placeholder="010-0000-0000"
        />
        <button>회원가입</button>
      </form>
      <Link to="/login">로그인</Link>
    </div>
  );
};

export default UserSignUpForm;
