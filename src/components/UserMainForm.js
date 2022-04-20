import { FaUser } from "react-icons/fa";
import { ImLibrary } from "react-icons/im";
import { BsBookmarkStar, BsJournalText } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { WiCloud } from "react-icons/wi";
import { Link } from "react-router-dom";

const UserMainForm = ({ props }) => {
  return (
    <div className="main">
      <Link to="/main" className="logo">
        <WiCloud />
        <span>Cloud Library</span>
      </Link>
      <form onSubmit={props.onSubmit}>
        <input placeholder="도서 검색" />
        <button>
          <BiSearch className="icon" />
        </button>
      </form>
      <div className="feature-box">
        <div className="feature">
          <div onClick={props.handleProfile}>
            <FaUser className="icon" />
            <span className="text">마이 페이지</span>
          </div>
          <div onClick={props.handleFindLibrary}>
            <ImLibrary className="icon" />
            <span className="text">도서관찾기</span>
          </div>
        </div>
        <div className="feature">
          <div onClick={props.handleReservation}>
            <BsBookmarkStar className="icon" />
            <span className="text">예약 관리</span>
          </div>
          <div onClick={props.handleLending}>
            <BsJournalText className="icon" />
            <span className="text">대출 기록</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMainForm;
