import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initializeForm, login } from "../../modules/auth";
import UserLoginForm from "../../components/auth/UserLoginForm";
import { check } from "../../modules/user";
import { createBrowserHistory } from "history";

const LoginForm = () => {
  const history = createBrowserHistory();
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  const onChange = (event) => {
    const { value, name } = event.target;
    dispatch(
      changeField({
        form: "login",
        key: name,
        value,
      })
    );
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const { userId, password } = form;
    dispatch(login({ userId, password }));
  };

  useEffect(() => {
    dispatch(initializeForm("login"));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log("Error");
      console.log(authError);
      return;
    }
    if (auth) {
      console.log("로그인 성공");
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      history.push("/");
    }
  }, [history, user]);

  return <UserLoginForm form={form} onChange={onChange} onSubmit={onSubmit} />;
};

export default LoginForm;
