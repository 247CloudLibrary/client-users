import { Link } from "react-router-dom";
import { WiCloud } from "react-icons/wi";
import { IoIosHome, IoMdCall, IoIosMail } from "react-icons/io";
import { RiCake2Fill } from "react-icons/ri";
import { BsGenderAmbiguous, BsPersonFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { useEffect, useState } from "react";
import axios from "axios";

const UserProfileForm = ({ userInfo, form, onChange, onSubmit }) => {
  const json = JSON.parse(localStorage.getItem("user"));
  const storage = json.data;
  const [toggle, setToggle] = useState(true);
  const [profile, setProfile] = useState();
  const [list, setList] = useState({ ...profile });
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

  const patchProfile = async (uid, list, token) => {
    await axios.patch(`/v1/auth/update-state/${uid}`, list, {
      headers: { Authorization: "Bearer " + token },
    });
  };

  const editProfile = async () => {
    await getProfile(uid, token);

    setToggle((toggle) => !toggle);
  };

  const handleEdit = (event) => {
    const { name, value } = event.target;
    const list = { ...profile };
    list[name] = value;
    setList(list);
  };

  useEffect(() => {
    getProfile(uid, token);
  }, []);

  const handleConfirm = async (event) => {
    event.preventDefault();
    if (toggle === true) {
      if (window.confirm("수정하시겠습니까?")) {
        await editProfile();
      } else {
        return;
      }
    } else {
      if (window.confirm("등록하시겠습니까?")) {
        await patchProfile(uid, list, token);
        await editProfile();
      } else {
        return;
      }
    }
  };
  return (
    <div className="profile">
      <Link to={"/main"} className="logo">
        <WiCloud />
        <span className="title">Cloud Library</span>
      </Link>
      {loading ? (
        <form>
          <div className="profile-form">
            <div>
              <BsPersonFill />
              <input
                onChange={handleEdit}
                name="userName"
                type="text"
                value={toggle ? profile.userName : list.userName}
                disabled={toggle}
                required
              />
            </div>
            <div>
              <BsGenderAmbiguous />
              <input
                name="gender"
                type="text"
                value={toggle ? profile.gender : list.gender}
                disabled={toggle}
                onChange={handleEdit}
                required
              />
            </div>
            <div>
              <IoIosHome />
              <input
                name="address"
                type="text"
                value={toggle ? profile.address : list.address}
                disabled={toggle}
                onChange={handleEdit}
                required
              />
            </div>
            <div>
              <IoIosMail />
              <input
                name="email"
                type="text"
                value={toggle ? profile.email : list.email}
                disabled={toggle}
                onChange={handleEdit}
                required
              />
            </div>
            <div>
              <IoMdCall />
              <input
                name="tel"
                type="text"
                value={toggle ? storage.tel : list.tel}
                disabled={toggle}
                onChange={handleEdit}
                required
              />
            </div>
            <div>
              <RiCake2Fill />
              <input
                name="birth"
                type="date"
                value={toggle ? profile.birth : list.birth}
                disabled={toggle}
                onChange={handleEdit}
                required
              />
            </div>
            <div className="editBtn">
              {toggle ? (
                <button onClick={handleConfirm}>
                  <FiEdit />
                  <span>Edit</span>
                </button>
              ) : (
                <button onClick={handleConfirm}>
                  <FiEdit />
                  <span>Done</span>
                </button>
              )}
            </div>
          </div>
        </form>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
};

export default UserProfileForm;
