import { Link } from "react-router-dom";
import { WiCloud } from "react-icons/wi";
import { IoIosHome, IoMdCall, IoIosMail } from "react-icons/io";
import { RiCake2Fill } from "react-icons/ri";
import { BsGenderAmbiguous, BsPersonFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { useState } from "react";

const UserProfileForm = ({ userInfo, form, onChange, onSubmit }) => {
  const [toggle, setToggle] = useState(true);
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
      <Link to={"/"} className="logo">
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
              value={form.userName}
              disabled={toggle}
            />
          </div>
          <div>
            <BsGenderAmbiguous />
            <input
              name="gender"
              type="text"
              value={form.gender}
              disabled={toggle}
              onChange={onChange}
            />
          </div>
          <div>
            <IoIosHome />
            <input
              name="address"
              type="text"
              value={form.address}
              disabled={toggle}
            />
          </div>
          <div>
            <IoIosMail />
            <input
              name="email"
              type="text"
              value={form.email}
              disabled={toggle}
            />
          </div>
          <div>
            <IoMdCall />
            <input name="tel" type="text" value={form.tel} disabled={toggle} />
          </div>
          <div>
            <RiCake2Fill />
            <input
              name="birth"
              type="text"
              value={form.birth}
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
