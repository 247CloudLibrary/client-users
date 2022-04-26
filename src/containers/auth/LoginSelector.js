import LoginSelectorForm from "../../components/auth/LoginSeletorForm";
import { useNavigate } from "react-router-dom";

const LoginSelector = () => {
  const navigate = useNavigate();
  const handleUser = () => {
    navigate("/login");
  };
  const handleAdmin = () => {
    window.location.href = "https://www.cloudlibrary.shop/clientAdmin-service";
    return;
  };
  return <LoginSelectorForm user={handleUser} admin={handleAdmin} />;
};
export default LoginSelector;
