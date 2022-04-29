import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const CompositeDetail = () => {
  const [compositeData, setCompositeData] = useState([]);
  const location = useLocation();
  const bookId = location.state.bookId;

  useEffect(() => {
    axios
      .get(`https://www.cloudlibrary.shop/v1/composite/${bookId}`)
      .then(function (response) {
        setCompositeData(response.data.data);
      });
  }, []);

  const CompositeDetailArray = [
    { value: compositeData.author, key: "author", tag: "저자" },
    { value: compositeData.translator, key: "translator", tag: "역자" },
    { value: compositeData.genre, key: "genre", tag: "장르" },
    {
      value: compositeData.category,
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
      key: "reservationDateTime",
      tag: "예약 상태",
    },
  ];

  return (
    <div id="composite-detail">
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
                alt=""
              />
            </div>
            <table className="text-box">
              {CompositeDetailArray.map((data) => (
                <thead className="label" key={data.key}>
                  <tr>
                    <td className="label-tag">{data.tag}</td>
                    <td className="label-value">{data.value}</td>
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
