import { Link } from "react-router-dom";
import { WiCloud } from "react-icons/wi";

const AdminRegisterPage = () => {
  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div id="admin-register">
      <div>
        <Link to={"/"} className="logo">
          <WiCloud />
          <span>Cloud Library</span>
        </Link>
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="이메일을 입력해주세요" />
          <button>양식받기</button>
        </form>
      </div>
    </div>
  );
};

export default AdminRegisterPage;
