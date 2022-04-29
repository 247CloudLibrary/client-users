import { Link } from "react-router-dom";
import { WiCloud } from "react-icons/wi";
import { IoIosHome, IoMdCall, IoIosMail } from "react-icons/io";
import { RiCake2Fill } from "react-icons/ri";
import { BsGenderAmbiguous, BsPersonFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { useState } from "react";

const UserProfileForm = ({ userInfo, form, onChange, onSubmit }) => {
  const json = JSON.parse(localStorage.getItem("user"));
  const storage = json.data;
  const [toggle, setToggle] = useState(true);
  console.log(storage);
  /**
  // TODO : 회원 정보 조회

  const [list, setList] = useState({ ...form });

  setList((list) => ({
    ...list,
    userName: `${userInfo.userName}`,
    gender: `${userInfo.gender}`,
    address: `${userInfo.address}`,
    email: `${userInfo.email}`,
    tel: `${userInfo.tel}`,
    birth: `${userInfo.birth}`,
  }));
 */
  const handleClick = (event) => {
    event.preventDefault();
    setToggle((toggle) => !toggle);
  };

  console.log(form.userName);
  return (
    <div className="profile">
      <Link to={"/main"} className="logo">
        <WiCloud />
        <span className="title">Cloud Library</span>
      </Link>
      <form>
        <div className="profile-form">
          <div>
            <BsPersonFill />
            <input
              onChange={onChange}
              name="userName"
              type="text"
              value={storage.userName}
              disabled={toggle}
            />
          </div>
          <div>
            <BsGenderAmbiguous />
            <input
              name="gender"
              type="text"
              value={storage.gender}
              disabled={toggle}
              onChange={onChange}
            />
          </div>
          <div>
            <IoIosHome />
            <input
              name="address"
              type="text"
              value={storage.address}
              disabled={toggle}
            />
          </div>
          <div>
            <IoIosMail />
            <input
              name="email"
              type="text"
              value={storage.email}
              disabled={toggle}
            />
          </div>
          <div>
            <IoMdCall />
            <input
              name="tel"
              type="text"
              value={storage.tel}
              disabled={toggle}
            />
          </div>
          <div>
            <RiCake2Fill />
            <input
              name="birth"
              type="text"
              value={storage.birth}
              disabled={toggle}
            />
          </div>
          <div className="editBtn">
            {toggle ? (
              <button onClick={handleClick}>
                <FiEdit />
                <span>Edit</span>
              </button>
            ) : (
              <button onClick={handleClick}>
                <FiEdit />
                <span>Done</span>
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserProfileForm;
