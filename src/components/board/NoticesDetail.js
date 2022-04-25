import axios from "axios";
import HTMLReactParser from "html-react-parser";
import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

// const contents =
//   "<p>조회한 게시글의 내용</p><strong>조회한 게시글의 내용</strong>";
// const title = "게시글 제목";
// const adminName = "작성자";
// const LibrariesName = "도서관 이름";
// const createdAt = "2022.22.22";
// const readCounts = "222";

const NoticesDetail = () => {
  const [noticeDetail, setNoticeDetail] = useState([]);
  const location = useLocation();

  const id = location.state.id;
  console.log(id);

  useEffect(() => {
    axios
      .get(
        `http://ecs-alb-167470959.us-east-1.elb.amazonaws.com/v1/boards/${id}`
      )
      .then(function (detail) {
        setNoticeDetail(detail.data.data);
      });
  }, []);
  console.log(noticeDetail);

  return (
    <div id="notices-detail">
      <div className="detail-form">
        <div className="title-area">
          <div className="board-title">{noticeDetail.title}</div>
        </div>
        <div className="info-area">
          <div className="board-writer">{noticeDetail.adminName}</div>
          <div className="board-created">{noticeDetail.createdAt}</div>
          <div className="board-readcounts">
            조회수 {noticeDetail.readCounts}
          </div>
          <div className="board-library">{noticeDetail.libraryName}</div>
        </div>
        <div className="contents-area">
          <div className="board-contents">
            {HTMLReactParser(`${noticeDetail.contents}`)}
          </div>
        </div>
        <div className="return">
          <Link to="/notices">
            <button className="return-btn">목록으로</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoticesDetail;
