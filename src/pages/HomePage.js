import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   nagvigate("/libraries/list");
  // };

  const onSearch = (event) => {
    event.preventDefault();
    navigate("/composite-list");
  };

  return (
    <div id="home">
      <header>
        <span>Cloud Library</span>
        <Link to={"/login-selector"}>
          <button>로그인</button>
        </Link>
        <Link to={"/signUp"}>
          <button>회원가입</button>
        </Link>
        <Link to={"/admin-register"}>
          <button>관리자신청</button>
        </Link>
      </header>
      <main>
        <div className="title">
          <span>Title</span>
          <form onSubmit={onSearch}>
            <input id="search-home" type="text" placeholder="책 검색" />
            <button>🔍</button>
          </form>
        </div>
        <div className="feature">Feature</div>
        <div className="board">
          <Link to={"/guide"}>
            <button>이용안내</button>
          </Link>
          <Link to={"/notices"}>
            <button>공지사항</button>
          </Link>
          <Link to={"/admin-register"}>
            <button>관리자신청</button>
          </Link>
          <Link to={"/libraries/list"}>
            <button>도서관찾기</button>
          </Link>
        </div>
        <div className="featureDetail">FeatureDetail</div>
      </main>
      <footer>
        <div>Footer</div>
      </footer>
    </div>
  );
};

export default HomePage;
