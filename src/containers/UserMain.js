import UserMainForm from "../components/UserMainForm";
import { useNavigate } from "react-router-dom";

const UserMain = () => {
  const navigate = useNavigate();

  const onSubmit = () => {
    navigate("/composite-list");
  };
  const handleProfile = () => {
    navigate("/profile");
  };
  const handleFindLibrary = () => {
    navigate("/libraries/list");
  };
  const handleReservation = () => {
    navigate("/reservation");
  };
  const handleLending = () => {
    navigate("/record");
  };

  const onLogout = () => {
    if (localStorage.getItem("user")) {
      localStorage.removeItem("user");

      window.location.href = "https://www.cloudlibrary.shop";
    } else {
      console.log("Local Storage is null");
    }
  };

  const props = {
    onSubmit,
    handleProfile,
    handleFindLibrary,
    handleReservation,
    handleLending,
    onLogout,
  };

  return <UserMainForm props={props} />;
};

export default UserMain;
