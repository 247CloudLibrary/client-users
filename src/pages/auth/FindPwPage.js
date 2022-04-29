import FindPw from "../../containers/auth/FindPw";

const FindPwPage = () => {
  return (
    <div id="findPw">
      {localStorage.getItem("user") === null ? (
        <FindPw />
      ) : (
        <Link to="/main">메인페이지로 이동</Link>
      )}
    </div>
  );
};

export default FindPwPage;
