import { Link, useLocation } from "react-router-dom";
import BoardSidebar from "./BoardSideBar";
import BoardNoticeListItem from "./BoardNoticeListItem";
import BoardInfo from "./BoardInfo";
import BoardMap from "./BoardMap";
import { useEffect, useState } from "react";
import axios from "axios";

const BoardList = () => {
  const location = useLocation();
  const [content, setContent] = useState("");
  const [btn, setBtn] = useState(false);
  const [head, setHead] = useState(false);
  const [noticeData, setNoticeData] = useState([]);
  const [infoData, setInfoData] = useState([]);
  const [mode, setMode] = useState("공지사항");

  const libraryId = location.state.libraryId;
  const address = location.state.address;

  const getMode = (mode) => {
    setMode(mode);
    if (mode === "공지사항") {
      setContent("공지사항");
      setHead(false);
      setBtn(false);
    } else if (mode === "이용안내") {
      setContent("이용안내");
      setHead(true);
      setBtn(false);
    } else {
      setContent("오시는 길");
      setBtn(true);
      setHead(true);
    }
  };

  useEffect(() => {
    axios.get("https://www.cloudlibrary.shop/v1/boards").then((response) => {
      const boardArr = response.data.data;

      const filtedByLibraryName =
        boardArr.libraryName !== libraryName
          ? boardArr.filter((i) => i.libraryName === libraryName)
          : boardArr;

      const filtedByNoticeData =
        filtedByLibraryName.type === "공지사항"
          ? filtedByLibraryName.filter((i) => i.type === "공지사항")
          : filtedByLibraryName;
      setNoticeData(filtedByNoticeData);

      const filtedByInfoData =
        filtedByLibraryName.type === "안내사항"
          ? filtedByLibraryName.filter((i) => i.type === "안내사항")
          : filtedByLibraryName;
      setInfoData(filtedByInfoData);
    });
  }, []);

  const ListArray = [
    { listName: "번호", className: "id" },
    { listName: "제목", className: "title" },
    { listName: "작성자", className: "name" },
    { listName: "작성일", className: "writedate" },
    // { listName: "수정일", className: "editdate" },
    { listName: "조회수", className: "readcount" },
  ];

  return (
    <main id="board-list">
      <h1 className="content">{content}</h1>
      <table className="list">
        <thead>
          <tr className="list-title" style={head ? { opacity: 0 } : null}>
            {ListArray.map((la) => (
              <th className={la.className} key={la.listName}>
                {la.listName}
              </th>
            ))}
          </tr>
        </thead>
      </table>
      <div className="form-box">
        <div className="sidebar-box">
          <BoardSidebar getMode={getMode} />
        </div>

        {mode === "공지사항" && (
          <div className="item-box">
            {noticeData &&
              noticeData.map((data) => (
                <div className="listitem-box" key={data.id}>
                  <BoardNoticeListItem
                    id={data.id}
                    title={data.title}
                    adminName={data.adminName}
                    createdAt={data.createdAt}
                    readCounts={data.readCounts}
                  />
                </div>
              ))}
          </div>
        )}
        {mode === "이용안내" && (
          <div className="info-box">
            <BoardInfo infoData={infoData} />
          </div>
        )}
        {mode === "오시는 길" && (
          <div>
            <BoardMap libraryAddress={address} />
          </div>
        )}
      </div>
    </main>
  );
};

export default BoardList;
