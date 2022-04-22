import { HiOutlineSpeakerphone } from "react-icons/hi";
import { MdOutlineEventNote } from "react-icons/md";
import { FaRegIdCard } from "react-icons/fa";
import { ImLibrary } from "react-icons/im";
import { Link } from "react-router-dom";

const Navigations = () => {
  return (
    <div className="navigations">
      <Link className="" to={"/guide"}>
        <div className="nav-box">
          <MdOutlineEventNote className="icon" />
          <span className="text">이용안내</span>
        </div>
      </Link>
      <Link to={"/notices"}>
        <div className="nav-box">
          <HiOutlineSpeakerphone className="icon" />
          <span className="text">공지사항</span>
        </div>
      </Link>
      <Link to={"/admin-register"}>
        <div className="nav-box">
          <FaRegIdCard className="icon" />
          <span className="text">관리자신청</span>
        </div>
      </Link>
      <Link to={"/libraries/list"}>
        <div className="nav-box">
          <ImLibrary className="icon" />
          <span className="text">도서관찾기</span>
        </div>
      </Link>
    </div>
  );
};

export default Navigations;
