import LoginSelectorForm from "../../components/auth/LoginSeletorForm";
import { useNavigate } from "react-router-dom";

const LoginSelector = () => {
  const navigate = useNavigate();
  const handleUser = () => {
    navigate("/login");
  };
  return <LoginSelectorForm user={handleUser} />;
};
export default LoginSelector;
