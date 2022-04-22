import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";

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
        <span className="title">Cloud Library</span>
        <div>
          <Link to={"/admin-register"} className="title-btn">
            관리자신청
          </Link>
          <Link to={"/login-selector"} className="title-btn">
            로그인
          </Link>
        </div>
      </header>

      <main>
        <div className="main">
          <form className="home__search-bar">
            <input name="search-home" type="text" autoComplete="off" required />
            <label htmlFor="search-home" className="label-name">
              <span className="content-name">Book Title</span>
            </label>
            <BiSearch className="icon" />
          </form>
        </div>
        <div className="feature"></div>
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
