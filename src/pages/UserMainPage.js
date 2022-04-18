import { useNavigate } from "react-router-dom";

const UserMainPage = () => {
  const navigate = useNavigate();
  const onSubmit = (event) => {
    event.preventDefault();
    navigate("/composite-list");
  };
  const handleProfile = () => {
    navigate("/profile");
  };
  const handleFindLibrary = () => {
    navigate("/libraries/list");
  };
  const handleReservation = () => {
    navigate("/reservation");
  };
  const handleLending = () => {
    navigate("/record");
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
      <button onClick={handleReservation}>예약 관리</button>
      <button onClick={handleLending}>대출 기록</button>
    </div>
  );
};

export default UserMainPage;
