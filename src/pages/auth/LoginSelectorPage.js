import { Link } from "react-router-dom";

const LoginSelectorPage = () => {
  return (
    <div>
      <button>관리자</button>
      <Link to={"/login"}>
        <button>일반회원</button>
      </Link>
    </div>
  );
};

export default LoginSelectorPage;
