import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BsMegaphone } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { ImLibrary } from "react-icons/im";
import { GiBookmarklet } from "react-icons/gi";
import { WiCloud } from "react-icons/wi";

const LibraryMainForm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const id = location.state.id;
  console.log(id);
  const libraryName = location.state.libraryName;

  return (
    <div id="LibraryMainForm">
      <div className="library-name">{libraryName}</div>
      <form>
        <input placeholder="도서 검색" />
        <BiSearch className="icon" />
      </form>
      <div className="item-box">
        <div className="item">
          <div
            onClick={() => {
              navigate(`/boards/list/${id}`, {
                state: { id: id, libraryName: libraryName },
              });
            }}
          >
            <BsMegaphone className="icon" />
            <span className="tag">게시판</span>
          </div>
        </div>
        <div className="item">
          <div
            onClick={() => {
              navigate("/libraries/list");
            }}
          >
            <ImLibrary className="icon" />
            <span className="tag">도서관찾기</span>
          </div>
        </div>
        <div className="item">
          <div
            onClick={() => {
              navigate(`/library/detail/${id}`, {
                state: { id: id },
              });
            }}
          >
            <GiBookmarklet className="icon" />
            <span className="tag">도서관 정보</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryMainForm;
