import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const LibraryMainForm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const id = location.state.id;
  console.log(id);
  const libraryName = location.state.libraryName;
  console.log(libraryName);

  const toBoard = () => {
    navigate(`/boards/list/${id}`, {
      state: { id: id, libraryName: libraryName },
    });
  };
  // const toDetail = () => {
  //   navigate(`librar`)
  // }

  return (
    <div id="LibraryMainForm">
      <div className="library-name">{libraryName}</div>
      <div>
        <button onClick={toBoard}>게시판</button>
      </div>
      <div>
        <Link to="/libraries/list">
          <button>도서관찾기</button>
        </Link>
        <div>
          <button>TODO 도서 상세 페이지</button>
        </div>
      </div>
    </div>
  );
};

export default LibraryMainForm;
