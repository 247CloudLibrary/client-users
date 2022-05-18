import UserMainForm from "../components/UserMainForm";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const UserMain = () => {
  const navigate = useNavigate();
  const json = JSON.parse(localStorage.getItem("user"));
  const storage = json.data;
  const [profile, setProfile] = useState();
  const [loading, setLoading] = useState(false);

  const uid = storage.uid;
  const token = json.headers.token;

  const getProfile = async (uid, token) => {
    const json = await (
      await fetch(`/v1/auth/${uid}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
    ).json();
    setProfile(json.data);
    setLoading(true);
  };

  useEffect(() => {
    getProfile(uid, token);
  }, []);

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
  const handlePasswordChange = () => {
    navigate("/change-pw");
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
    profile,
    loading,
    handlePasswordChange,
  };

  return <UserMainForm props={props} />;
};

export default UserMain;
