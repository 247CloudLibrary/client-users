import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  IoLibraryOutline,
  IoCalendarNumberOutline,
  IoTimeOutline,
} from "react-icons/io5";
import { FaSortNumericUpAlt, FaRegCalendarTimes } from "react-icons/fa";
import { AiOutlineWarning } from "react-icons/ai";
import { GrMapLocation } from "react-icons/gr";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { GiNightSleep } from "react-icons/gi";

const LibrariesDetail = () => {
  const [libraryData, setLibraryData] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.state.id;

  const json = JSON.parse(localStorage.getItem("user"));
  const token = json.headers.token;

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  useEffect(() => {
    axios
      .get(`https://www.cloudlibrary.shop/v1/libraries/${id}`, {
        headers: headers,
      })
      .then(function (response) {
        setLibraryData(response.data.data);
        console.log(response.data.data);
      });
  }, []);

  const LibraryDetailArray = [
    {
      value: libraryData.address,
      key: "address",
      tag: "주소",
      icon: <GrMapLocation />,
    },
    { value: libraryData.tel, key: "tel", tag: "TEL", icon: <BsTelephone /> },
    {
      value: libraryData.email,
      key: "email",
      tag: "이메일",
      icon: <HiOutlineMail />,
    },
    {
      value: libraryData.holiday,
      key: "holiday",
      tag: "휴관일",
      icon: <GiNightSleep />,
    },
    {
      value: libraryData.operatingTime,
      key: "operatingTime",
      tag: "운영시간",
      icon: <IoTimeOutline />,
    },
  ];
  const toLibMain = () => {
    navigate(-1);
  };

  return (
    <div id="libraries-detail">
      <div className="header"></div>
      <div className="library-name">{libraryData.name}</div>
      <div className="info-area">
        <div className="detail-info">도서관 정보</div>
        <table className="detail-area">
          {LibraryDetailArray.map((lda) => (
            <thead className="detail-box" key={lda.key}>
              <tr className="detail-text">
                <td className="td-icon"> {lda.icon}</td>
                <td className="tag">{lda.tag}</td>
                <td className={lda.key}>{lda.value}</td>
              </tr>
            </thead>
          ))}
        </table>
      </div>
      <div className="rule-area">
        <div className="detail-info">이용규정</div>
        <div className="up-rule">
          <div className="library-rule">
            <div className="icon-num">
              <IoLibraryOutline className="icon" />
              <span className="text">{libraryData.lendingAvailableCount}</span>
            </div>
            <span className="label">대출 가능 권수</span>
          </div>
          <div className="library-rule">
            <div className="icon-num">
              <IoCalendarNumberOutline className="icon" />
              <span className="text">{libraryData.lendingAvailableDays}</span>
            </div>
            <span className="label">대출 가능 일수</span>
          </div>
        </div>
        <div className="down-rule">
          <div className="library-rule">
            <div className="icon-num">
              <FaSortNumericUpAlt className="icon" />
              <span className="text">{libraryData.overdueCount}</span>
            </div>
            <span className="label">대출 제한 연체 횟수</span>
          </div>
          <div className="library-rule">
            <div className="icon-num">
              <FaRegCalendarTimes className="icon" />
              <span className="text">{libraryData.longtermOverdueDays}</span>
            </div>
            <span className="label">장기 연체 구분 일수</span>
          </div>
          <div className="library-rule">
            <div className="icon-num">
              <AiOutlineWarning className="icon" />
              <span className="text">{libraryData.lendingLimitDays}</span>
            </div>
            <span className="label">대출 제한 일수</span>
          </div>
        </div>
      </div>

      <div className="btn-area">
        <button className="list-btn" onClick={toLibMain}>
          돌아가기
        </button>
      </div>
    </div>
  );
};
export default LibrariesDetail;
