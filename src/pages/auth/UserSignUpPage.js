import SignUpForm from "../../containers/auth/SignUpForm";

const UserSignUpPage = () => {
  return (
    <div id="signUp">
      {localStorage.getItem("user") === null ? (
        <SignUpForm />
      ) : (
        <Link to="/main">메인페이지로 이동</Link>
      )}
    </div>
  );
};

export default UserSignUpPage;
