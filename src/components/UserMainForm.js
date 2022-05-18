import { FaUser, FaUserLock, FaRegAddressBook } from "react-icons/fa";
import { ImLibrary } from "react-icons/im";
import { BsJournalText } from "react-icons/bs";
import { GiArchiveResearch } from "react-icons/gi";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { WiCloud } from "react-icons/wi";
import { Link } from "react-router-dom";
import Footer from "../pages/home/Footer";

const UserMainForm = ({ props }) => {
  return (
    <>
      <div className="main">
        <div className="header">
          <Link to="/main" className="logo">
            <WiCloud />
            <span>Cloud Library</span>
          </Link>
          <button onClick={props.onLogout} className="logout">
            <RiLogoutBoxRLine />
          </button>
        </div>
        {props.loading ? (
          <div className="username">안녕하세요, {props.profile.userName}님</div>
        ) : (
          ""
        )}
        <div className="feature-box">
          <div className="feature">
            <div onClick={props.onSubmit}>
              <GiArchiveResearch className="icon" />
              <span className="text">도서 찾기</span>
            </div>
            <div onClick={props.handleProfile}>
              <FaUser className="icon" />
              <span className="text">마이페이지</span>
            </div>

            <div onClick={props.handleLending}>
              <BsJournalText className="icon" />
              <span className="text">대출 기록</span>
            </div>
          </div>
          <div className="feature">
            <div onClick={props.handleFindLibrary}>
              <ImLibrary className="icon" />
              <span className="text">도서관찾기</span>
            </div>
            <div onClick={props.handlePasswordChange}>
              <FaUserLock className="icon" />
              <span className="text">비밀번호변경</span>
            </div>
            <div onClick={props.handleReservation}>
              <FaRegAddressBook className="icon" />
              <span className="text">예약관리</span>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default UserMainForm;
