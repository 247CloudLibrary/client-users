import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initializeForm, signUp } from "../../modules/auth";
import UserSignUpForm from "../../components/auth/UserSignUpForm";
import { check } from "../../modules/user";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.signUp,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  const onChange = (event) => {
    const { value, name } = event.target;
    dispatch(
      changeField({
        form: "signUp",
        key: name,
        value,
      })
    );
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const {
      userId,
      userName,
      password,
      passwordConfirm,
      gender,
      birth,
      address,
      email,
      tel,
    } = form;
    if (password !== passwordConfirm) {
      // Error
      return;
    }
    try {
      dispatch(
        signUp({
          userId,
          userName,
          password,
          gender,
          birth,
          address,
          email,
          tel,
        })
      );
      navigate("/login");
    } catch (e) {
      console.log("ERROR");
    }
  };

  // Form 초기화
  useEffect(() => {
    dispatch(initializeForm("signUp"));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log("Error");
      console.log(authError);
      return;
    }
    if (auth) {
      console.log("회원가입 성공");
      console.log(auth);
    }
  }, [auth, authError, dispatch]);

  // user 값이 설정되었는지 확인
  useEffect(() => {
    if (user) {
      navigate("/");
      console.log("check API 성공");
      console.log(user);
    }
  }, [navigate, user]);

  return <UserSignUpForm form={form} onChange={onChange} onSubmit={onSubmit} />;
};

export default SignUpForm;
