import UserProfileForm from "../../components/auth/UserProfileForm";
import { useEffect, useState } from "react";

const ProfileForm = () => {
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState("");

  const getProfile = async () => {
    const json = await (await fetch("auth/1")).json();
    setValue(json.data);
    setLoading(false);
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div>
      {loading ? <h1>Loading...</h1> : <UserProfileForm userInfo={value} />}
    </div>
  );
};

export default ProfileForm;
