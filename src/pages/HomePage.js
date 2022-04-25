import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SearchBar from "./home/SearchBar";
import Navigations from "./home/Navigations";
import Feature from "./home/Feature";
import { useScroll } from "./useScroll";

const HomePage = () => {
  const navigate = useNavigate();
  console.log(useScroll());
  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   nagvigate("/libraries/list");
  // };

  // const onSearch = (event) => {
  //   event.preventDefault();
  //   navigate("/composite-list");
  // };

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
        <SearchBar />
        <Navigations />
        <Feature />
        <div className="featureDetail">FeatureDetail</div>
      </main>

      <footer>
        <div>Footer</div>
      </footer>
    </div>
  );
};

export default HomePage;
