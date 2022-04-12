import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initializeForm, signUp } from "../../modules/auth";
import UserSignUpForm from "../../components/auth/UserSignUpForm";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const { form, auth, authError } = useSelector(({ auth }) => ({
    form: auth.signUp,
    auth: auth.auth,
    authError: auth.authError,
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
    dispatch(
      signUp({ userId, userName, password, gender, birth, address, email, tel })
    );
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
  }, [auth, authError]);

  return <UserSignUpForm form={form} onChange={onChange} onSubmit={onSubmit} />;
};

export default SignUpForm;
