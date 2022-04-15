import { Link } from "react-router-dom";
import { WiCloud } from "react-icons/wi";
import { IoIosHome, IoMdCall, IoIosMail } from "react-icons/io";
import { RiCake2Fill } from "react-icons/ri";
import { BsGenderAmbiguous, BsPersonFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

const UserProfileForm = ({ userInfo }) => {
  return (
    <div className="profile">
      <Link to={"/"} className="logo">
        <WiCloud />
        <span>Cloud Library</span>
      </Link>
      <form>
        <div className="profile-form">
          <div>
            <BsPersonFill />
            <input type="text" value={userInfo.userName} disabled />
            <FiEdit />
          </div>
          <div>
            <BsGenderAmbiguous />
            <input type="text" value={userInfo.gender} disabled />
            <FiEdit />
          </div>
          <div>
            <IoIosHome />
            <input type="text" value={userInfo.address} disabled />
            <FiEdit />
          </div>
          <div>
            <IoIosMail />
            <input type="text" value={userInfo.email} disabled />
            <FiEdit />
          </div>
          <div>
            <IoMdCall />
            <input type="text" value={userInfo.tel} disabled />
            <FiEdit />
          </div>
          <div>
            <RiCake2Fill />
            <input type="text" value={userInfo.birth} disabled />
            <FiEdit />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserProfileForm;
