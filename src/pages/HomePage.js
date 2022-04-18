import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to={"/login-selector"}>
        <button>로그인</button>
      </Link>
      <Link to={"/signUp"}>
        <button>회원가입</button>
      </Link>
      <Link to={"/libraries/list"}>
        <button>도서관 찾기</button>
      </Link>
      <Link to={"/profile"}>
        <button>마이 페이지</button>
      </Link>
    </div>
  );
};

export default HomePage;
