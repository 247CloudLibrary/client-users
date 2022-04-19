import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NoticesListItem from "./NoticesListItem";

const NoticesList = () => {
  // const [noticesData, setNoticesData] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("http://ecs-alb-167470959.us-east-1.elb.amazonaws.com/v1/boards")
  //     .then((response) => {
  //       setNoticesData(response.data);
  //     });
  // }, []);

  const BoardListArray = [
    { listName: "번호", className: "id" },
    { listName: "제목", className: "title" },
    { listName: "작성자", className: "name" },
    { listName: "작성일", className: "writedate" },
    // { listName: "수정일", className: "editdate" },
    { listName: "조회수", className: "readcount" },
  ];
  return (
    <div id="board-superadmin">
      <h1 className="content">통합 공지사항</h1>
      <div className="write">
        <Link to="/boards/write" style={{ display: "none" }}>
          <button className="write-btn">게시글 등록</button>
        </Link>
      </div>
      <table className="list">
        <thead>
          <tr className="list-title">
            {BoardListArray.map((la) => (
              <th className={la.className} key={la.listName}>
                {la.listName}
              </th>
            ))}
          </tr>
        </thead>
      </table>
      <div className="item-box">
        {/* {noticesData.data &&
          noticesData.data.map((data) => ( */}
        <div
          className="listitem-box"
          // key={data.id}
        >
          <NoticesListItem
          // id={data.id}
          // title={data.title}
          // adminName={data.adminName}
          // createdAt={data.createdAt}
          // readCounts={data.readCounts}
          />
        </div>
        {/* ))} */}
      </div>
    </div>
  );
};

export default NoticesList;
