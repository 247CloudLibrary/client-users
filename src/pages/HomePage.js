import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to={"/login"}>
        <button>로그인</button>
      </Link>
      <Link to={"/signUp"}>
        <button>회원가입</button>
      </Link>
      <Link to={"/libraries/list"}>
        <button>도서관 찾기</button>
      </Link>
    </div>
  );
};

export default HomePage;
