import UserProfileForm from "../../components/auth/UserProfileForm";
import { useEffect, useState } from "react";

const ProfileForm = () => {
  const [value, setValue] = useState("");

  const getProfile = async () => {
    const json = await (await fetch("auth/1")).json();
    setValue(json.data);
  };

  useEffect(() => {
    getProfile();
  }, []);

  return <UserProfileForm userInfo={value} />;
};

export default ProfileForm;
