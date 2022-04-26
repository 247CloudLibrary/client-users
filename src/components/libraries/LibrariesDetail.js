import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { IoLibraryOutline, IoCalendarNumberSharp } from "react-icons/io5";
import { FaSortNumericUpAlt } from "react-icons/fa";
import { AiOutlineWarning } from "react-icons/ai";

const LibrariesDetail = () => {
  const [libraryData, setLibraryData] = useState([]);
  const location = useLocation();
  const navigte = useNavigate();
  const id = location.state.id;

  useEffect(() => {
    axios
      .get(
        `http://ecs-alb-167470959.us-east-1.elb.amazonaws.com/v1/libraries/${id}`
      )
      .then(function (response) {
        setLibraryData(response.data.data);
        console.log(response.data.data);
      });
  }, []);

  const LibraryDetailArray = [
    { value: libraryData.address, key: "address", tag: "주소" },
    { value: libraryData.tel, key: "tel", tag: "TEL" },
    { value: libraryData.email, key: "email", tag: "이메일" },
    { value: libraryData.holiday, key: "holiday", tag: "휴관일" },
    { value: libraryData.operatingTime, key: "operatingTime", tag: "운영시간" },
  ];
  const toLibMain = () => {
    navigte(-1);
  };

  return (
    <div id="libraries-detail">
      <div className="header"></div>
      <div className="info-area">
        <div className="library-name">{libraryData.name}</div>
        <table className="detail-area">
          {LibraryDetailArray.map((lda) => (
            <thead key={lda.key}>
              <tr className="detail-text">
                <td className="tag">{lda.tag}</td>
                <td className="value">{lda.value}</td>
              </tr>
            </thead>
          ))}
        </table>
      </div>
      <div className="rule-area">
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
              <IoCalendarNumberSharp className="icon" />
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
              <IoCalendarNumberSharp className="icon" />
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
          목록으로
        </button>
      </div>
    </div>
  );
};
export default LibrariesDetail;
