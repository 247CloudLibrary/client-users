const UserMainForm = ({ props }) => {
  return (
    <div>
      <span>유저 메인 페이지</span>
      <form onSubmit={props.onSubmit}>
        <input placeholder="도서 검색" />
        <button>🔍</button>
      </form>
      <button onClick={props.handleProfile}>마이 페이지</button>
      <button onClick={props.handleFindLibrary}>도서관찾기</button>
      <button onClick={props.handleReservation}>예약 관리</button>
      <button onClick={props.handleLending}>대출 기록</button>
    </div>
  );
};

export default UserMainForm;
