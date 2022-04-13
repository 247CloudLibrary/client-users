import { Link } from "react-router-dom";
import { WiCloud } from "react-icons/wi";

const UserSignUpForm = ({ form, onSubmit, onChange }) => {
  return (
    <div className="signUpForm">
      <Link to={"/"} className="logo">
        <WiCloud />
        <span>Cloud Library</span>
      </Link>
      <form onSubmit={onSubmit}>
        <input
          name="userId"
          onChange={onChange}
          value={form.userId}
          type="text"
          placeholder="아이디"
          required
        />
        <input
          name="password"
          onChange={onChange}
          value={form.password}
          placeholder="비밀번호"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}"
          type="password"
          required
        />
        <span id="validation">대소특수문자 포함 10자 이상</span>
        <input
          name="passwordConfirm"
          onChange={onChange}
          value={form.passwordConfirm}
          type="password"
          placeholder="비밀번호 확인"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}"
          required
        />
        <input
          name="userName"
          onChange={onChange}
          value={form.userName}
          type="text"
          placeholder="이름"
          required
        />
        <input
          name="gender"
          onChange={onChange}
          value={form.gender}
          type="text"
          placeholder="성별"
          required
        />
        <input
          name="birth"
          onChange={onChange}
          value={form.birth}
          type="date"
          date-placeholder="생년월일"
          required
        />
        <input
          name="email"
          placeholder="Email"
          onChange={onChange}
          value={form.email}
          type="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          required
        />
        <input
          name="address"
          placeholder="주소"
          onChange={onChange}
          value={form.address}
          type="text"
          required
        />
        <input
          name="tel"
          onChange={onChange}
          value={form.email}
          pattern="[0-9]{2,}-[0-9]{3,}-[0-9]{3,}"
          placeholder="연락처"
          type="tel"
          required
        />
        <span id="validation">ex) 010-0000-0000</span>
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
