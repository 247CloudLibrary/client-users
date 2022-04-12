import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initializeForm } from "../../modules/auth";
import UserLoginForm from "../../components/auth/UserLoginForm";

const LoginForm = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({ form: auth.login }));

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
  };

  useEffect(() => {
    dispatch(initializeForm("login"));
  }, [dispatch]);

  return <UserLoginForm form={form} onChange={onChange} onSubmit={onSubmit} />;
};

export default LoginForm;
