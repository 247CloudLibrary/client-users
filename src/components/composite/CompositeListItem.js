import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GrBook } from "react-icons/gr";

const LENDINGSTATUS_DATA = [
  { value: "OVERDUE", tag: "연체중" },
  { value: "OUT", tag: "대출중" },
  { value: "LOSS", tag: "분실" },
  { value: "RETURN", tag: "대출 가능" },
];

const CompositeListItem = ({
  bookId,
  thumbnailImage,
  title,
  libraryId,
  libraryName,
  barcode,
  author,
  translator,
  publisher,
  publishDate,
  lendingStatus,
  lendingDateTime,
  reservationDateTime,
  returnDateTime,
  genre,
  bookType,
  category,
}) => {
  const navigate = useNavigate();

  const [lendingStatusValue, setLendingStatusValue] = useState();

  const [returnDateValue, setReturnDateValue] = useState();

  useEffect(() => {
    const lendingFilted = lendingStatus
      ? LENDINGSTATUS_DATA.filter((i) => i.value === lendingStatus)[0].tag
      : lendingStatus;

    setLendingStatusValue(lendingFilted);
  }, []);
  // const return1 = returnDateTime[0];
  // const return2 = returnDateTime[1];
  // const return3 = returnDateTime[2];
  // console.log(return1);
  // console.log(return2);
  // console.log(return3);

  useEffect(() => {
    const returnDateFilted =
      returnDateTime !== "" ? `반납예정일 ${returnDateTime} ` : "";

    setReturnDateValue(returnDateFilted);
  }, []);

  const onClick = () => {
    navigate(`/composite-detail/${bookId}`, {
      state: { bookId: bookId },
    });
  };

  return (
    <div className="composite-items" key={bookId} onClick={onClick}>
      <div className="image-area">
        <img src={thumbnailImage} alt={title} className="thumbnailImage" />
      </div>
      <div className="compositeWrap">
        <div className="compositeCategory">
          <span className="type">{bookType}</span>
          <span className="genre">{genre}</span>
          <span className="category">{category}</span>
        </div>
        <div className="compositeTitle">{title}</div>
        <div className="compositeWrite">
          <span className="author">저자: {author}</span>
          <span className="translator">옮긴이: {translator}</span>
          <span className="publisher">발행자: {publisher}</span>
          <span className="publishDate">
            발행일: {publishDate[0]}년 {publishDate[1]}월 {publishDate[2]}일
          </span>
        </div>
        <div className="compositeData">
          <span className="barcode">청구기호: {barcode}</span>
          <span id={libraryId} className="libraryName">
            도서관: {libraryName}
          </span>
        </div>
        <div className="compositeStatusBar">
          <span className="lendingStatus">대출 상태: {lendingStatusValue}</span>
          <span className="lendingReservation">
            <GrBook /> {returnDateValue}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CompositeListItem;
