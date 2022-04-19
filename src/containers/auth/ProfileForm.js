import UserProfileForm from "../../components/auth/UserProfileForm";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initializeForm, profile } from "../../modules/auth";

const ProfileForm = () => {
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({
    form: auth.profile,
    auth: auth.auth,
  }));

  const onChange = (event) => {
    const { value, name } = event.target;
    dispatch(
      changeField({
        form: "profile",
        key: name,
        value,
      })
    );
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const { userName, gender, birth, address, email, tel } = form;
    dispatch(profile({ userName, gender, birth, address, email, tel }));
  };

  const getProfile = async () => {
    const json = await (await fetch("auth/1")).json();
    setValue(json.data);
    setLoading(false);
  };
  /*
  useEffect(() => {
    getProfile();
  }, []);
*/
  useEffect(() => {
    dispatch(initializeForm("profile"));
  }, [dispatch]);
  return (
    <div>
      <UserProfileForm form={form} onChange={onChange} />
    </div>
  );
};

export default ProfileForm;
