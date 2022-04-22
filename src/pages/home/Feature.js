import { IoLibraryOutline } from "react-icons/io5";
import { GiArchiveResearch, GiNotebook } from "react-icons/gi";

const Feature = () => {
  return (
    <div className="feature">
      <div className="feature-box">
        <IoLibraryOutline className="icon" />
        <span className="text">많은 도서</span>
        <p className="content">
          가입된 모든 도서관의 도서가
          <br />
          등록되어 있습니다.
        </p>
      </div>
      <div className="feature-box">
        <GiArchiveResearch className="icon" />
        <span className="text">도서 검색</span>
        <p className="content">
          등록된 도서관의 모든 도서를 <br />한 눈에 볼 수 있습니다.
        </p>
      </div>
      <div className="feature-box">
        <GiNotebook className="icon" />
        <span className="text">자유로운 예약</span>
        <p className="content">
          언제든지 자유롭게 예약하고 <br /> 취소할 수 있습니다.
        </p>
      </div>
    </div>
  );
};

export default Feature;
