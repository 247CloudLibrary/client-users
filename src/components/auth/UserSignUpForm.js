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
          autoComplete="off"
          required
        />
        <input
          name="password"
          onChange={onChange}
          value={form.password}
          placeholder="비밀번호"
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
          required
        />
        <input
          name="userName"
          onChange={onChange}
          value={form.userName}
          type="text"
          placeholder="이름"
          autoComplete="off"
          required
        />
        <input
          name="gender"
          onChange={onChange}
          value={form.gender}
          type="text"
          placeholder="성별"
          autoComplete="off"
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
          autoComplete="off"
          required
        />
        <input
          name="address"
          placeholder="주소"
          autoComplete="off"
          onChange={onChange}
          value={form.address}
          type="text"
          required
        />
        <input
          name="tel"
          onChange={onChange}
          value={form.tel}
          placeholder="연락처"
          autoComplete="off"
          type="tel"
          required
        />
        <span id="validation">ex) 010-0000-0000</span>
        <button className="signUp-btn">회원가입</button>
      </form>
    </div>
  );
};

export default UserSignUpForm;
