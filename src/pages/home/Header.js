import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <img
        src="/img/pero-kalimero-9BJRGlqoIUk-unsplash.jpg"
        className="header-img"
      ></img>
      <div className="header-img-cover"></div>
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
    </>
  );
};

export default Header;
