import UserMainForm from "../components/UserMainForm";
import { useNavigate } from "react-router-dom";

const UserMain = () => {
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
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

  const props = {
    onSubmit,
    handleProfile,
    handleFindLibrary,
    handleReservation,
    handleLending,
  };

  return <UserMainForm props={props} />;
};

export default UserMain;
