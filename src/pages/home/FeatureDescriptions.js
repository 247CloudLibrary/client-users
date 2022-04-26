import { FaBookReader, FaBook } from "react-icons/fa";
import { ImLibrary } from "react-icons/im";

const FeatureDescriptions = ({ scroll }) => {
  console.log(scroll.y);
  return (
    <div className="feature-descriptions">
      {scroll.y <= 350 ? (
        ""
      ) : (
        <div className="benefit-reading">
          <div className="img">
            <img src="/img/clay-banks-w_qTfiPbjbg-unsplash.jpg" />
          </div>
          <div className="content">
            <span className="title">원하는 도서를 검색하세요.</span>
            <p>
              Cloud Library는 가입된 모든 도서관의 도서를 검색할 수 있습니다.
              <br />
              도서를 검색하고 원하는 도서를 찾아 독서를 시작하세요.
              <br />
              Cloud Library를 통해 삶의 질을 높이실 수 있습니다.
            </p>
            <span>독서는...</span>
            <ul>
              <li>⭕ 수면의 질을 높일 수 있습니다.</li>
              <li>⭕ 사회적응력을 향상시켜 대인관계에 도움을 줍니다.</li>
              <li>⭕ 유연한 사고와 사고의 확장에 기여합니다.</li>
              <li>⭕ 공감능력과 창의력을 향상시킵니다.</li>
            </ul>
          </div>
        </div>
      )}
      {scroll.y <= 850 ? (
        ""
      ) : (
        <div className="benefit-reservation">
          <div className="content">
            <span className="title">간편하게 예약하세요. </span>
            <p>
              도서 예약으로 시간을 절약하시고 독서 습관을 만들어 보세요.
              <br />
              Cloud Library는 도서 예약을 지원합니다.
              <br />
              간편하게 예약하시고 언제든지 취소하세요.
            </p>
          </div>
          <div className="img">
            <img src="/img/negipho-u59gG_FIGIo-unsplash.jpg" />
          </div>
        </div>
      )}

      {scroll.y <= 1300 ? (
        ""
      ) : (
        <div className="benefit-register">
          <div className="img">
            <img src="/img/janko-ferlic-sfL_QOnmy00-unsplash.jpg" />
          </div>
          <div className="content">
            <span className="title">도서관을 등록하세요.</span>
            <p>
              Cloud Library에서는 도서관을 쉽게 등록할 수 있습니다.
              <br />
              도서관을 등록하시고 도서관리를 편하게 해보세요.
              <br />
              Cloud Library는 회원관리에 최적화된 환경을 제공합니다.
            </p>
          </div>
        </div>
      )}

      {scroll.y <= 1800 ? (
        ""
      ) : (
        <div className="benefit-count">
          <div className="count-box">
            <FaBookReader className="icon" />
            <span className="content">이용자</span>
            <span className="counts">132.2K</span>
          </div>
          <div className="count-box">
            <ImLibrary className="icon" />
            <span className="content">도서관</span>
            <span className="counts">34</span>
          </div>
          <div className="count-box">
            <FaBook className="icon" />
            <span className="content">도서</span>
            <span className="counts">2471K</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeatureDescriptions;
