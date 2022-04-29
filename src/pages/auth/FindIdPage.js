import FindId from "../../containers/auth/FindId";

const FindIdPage = () => {
  return (
    <div id="findId">
      {localStorage.getItem("user") === null ? (
        <FindId />
      ) : (
        <Link to="/main">메인페이지로 이동</Link>
      )}
    </div>
  );
};

export default FindIdPage;
