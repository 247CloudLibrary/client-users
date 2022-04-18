import { useNavigate } from "react-router-dom";

const UserMainPage = () => {
  const navigate = useNavigate();
  const onSubmit = (event) => {
    event.preventDefault();
  };
  const handleProfile = () => {
    navigate("/profile");
  };
  const handleFindLibrary = () => {
    navigate("/libraries/list");
  };
  return (
    <div>
      <span>유저 메인 페이지</span>
      <form onSubmit={onSubmit}>
        <input placeholder="도서 검색" />
        <button>🔍</button>
      </form>
      <button onClick={handleProfile}>마이 페이지</button>
      <button onClick={handleFindLibrary}>도서관찾기</button>
      <button>예약관리</button>
      <button>대출기록</button>
    </div>
  );
};

export default UserMainPage;
