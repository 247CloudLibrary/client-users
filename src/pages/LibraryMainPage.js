import { Link } from "react-router-dom";

const LibraryMainPage = () => {
  return (
    <>
      <div>
        <Link to="/boards/list">
          <button>게시판</button>
        </Link>
      </div>
      <div>
        <Link to="/libraries/list">
          <button>도서관찾기</button>
        </Link>
      </div>
    </>
  );
};

export default LibraryMainPage;
