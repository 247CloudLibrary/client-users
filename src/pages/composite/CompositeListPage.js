import { Link } from "react-router-dom";

const CompositeListPage = () => {
  return (
    <div>
      <span>도서 검색 목록 페이지</span>
      <Link to={"/composite-detail"}>
        <button>도서 상세 페이지</button>
      </Link>
    </div>
  );
};

export default CompositeListPage;
