import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const CompositeDetail = () => {
  const [code, setCode] = useState("(0)");
  const [compositeData, setCompositeData] = useState([]);
  const location = useLocation();
  const id = location.state.bookId;
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `http://ecs-alb-167470959.us-east-1.elb.amazonaws.com/v1/books/${id}`
      )
      .then(function (response) {
        setCompositeData(response.data.data);
        console.log(response);
      });
  }, []);

  const CompositeDetailArray = [
    { value: compositeData.author, key: "author", tag: "저자" },
    { value: compositeData.translator, key: "translator", tag: "역자" },
    { value: compositeData.genre, key: "genre", tag: "장르" },
    {
      value: `${compositeData.category}${code}`,
      key: "category",
      tag: "카테고리",
    },
    { value: compositeData.isbn, key: "isbn", tag: "ISBN" },
    { value: compositeData.publisher, key: "publisher", tag: "출판사" },
    { value: compositeData.publishDate, key: "publishDate", tag: "출판일" },
    { value: compositeData.barcode, key: "barcode", tag: "청구기호" },
    { value: compositeData.libraryName, key: "libraryName", tag: "도서관" },
    {
      value:
        compositeData.lendingStatus === "OUT"
          ? "대출중"
          : compositeData.lendingStatus === "OVERDUE"
          ? "연체중"
          : "대출가능",
      key: "lendingStatus",
      tag: "대출 상태",
    },
    {
      value:
        compositeData.reservationDateTime !== "" ? " 예약중" : " 예약 가능",
      key: compositeData.reservationDateTime,
      tag: "예약 상태",
    },
  ];

  useEffect(() => {
    if (compositeData.category === "철학") {
      setCode("(100)");
    } else if (compositeData.category === "종교") {
      setCode("(200)");
    } else if (compositeData.category === "사회과학") {
      setCode("(300)");
    } else if (compositeData.category === "순수과학") {
      setCode("(400)");
    } else if (compositeData.category === "기술과학") {
      setCode("(500)");
    } else if (compositeData.category === "예술") {
      setCode("(600)");
    } else if (compositeData.category === "언어") {
      setCode("(700)");
    } else if (compositeData.category === "문학") {
      setCode("(800)");
    } else if (compositeData.category === "역사") {
      setCode("(900)");
    } else {
      setCode(code);
    }
  }, []);

  return (
    <div id="book-detail">
      <div className="head">도서 상세페이지</div>
      <div className="detail-box">
        <div className="title-area">
          <div className="title-box">
            <span className="type">{compositeData.bookType}</span>
            <span className="title">{compositeData.title}</span>
          </div>
        </div>
        <div className="info-area">
          <div className="info-box">
            <div className="image-box">
              <img
                className="coverImage"
                src={compositeData.coverImage}
                alt="compositeData.title"
              />
            </div>
            <table className="text-box">
              {CompositeDetailArray.map((data) => (
                <thead className="label" key={data.key}>
                  <tr>
                    <td className="label-tag">{data.tag}</td>
                    <td className={data.key}>{data.value}</td>
                  </tr>
                </thead>
              ))}
            </table>
          </div>
        </div>
        <div className="minititle-box">
          <div className="minititle">상세정보</div>
        </div>
        <div className="contents-area">
          <div className="contents-box">
            <p>{compositeData.contents}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CompositeDetail;
