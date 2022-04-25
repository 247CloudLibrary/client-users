import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
  genre,
  type,
  category,
}) => {
  const navigate = useNavigate();

  const [lendingStatusValue, setLendingStatusValue] = useState();

  const [lendingReservationValue, setLendingReservationValue] = useState();

  useEffect(() => {
    const lendingFilted = lendingStatus
      ? LENDINGSTATUS_DATA.filter((i) => i.value === lendingStatus)[0].tag
      : lendingStatus;

    setLendingStatusValue(lendingFilted);
    console.log(lendingFilted);
  }, []);

  useEffect(() => {
    const lendingReservationFilted =
      reservationDateTime !== "" ? "예약중" : reservationDateTime;

    setLendingReservationValue(lendingReservationFilted);
    console.log(lendingReservationFilted);
  }, []);

  const onClick = () => {
    navigate(`/composite-detail/${bookId}`, {
      state: { bookId: bookId },
    });
  };

  return (
    <div className="composite-items" key={bookId} onClick={onClick}>
      <div className="img-area">
        <img src={thumbnailImage} alt={title} className="thumbnailmage" />
      </div>
      <div className="bookWrap">
        <div className="bookTitle">책 제목: {title}</div>
        <div className="bookCategory">
          <span>타입:{type}</span>
          <span>장르: {genre}</span>
          <span>분류 :{category}</span>
        </div>
        <div className="bookWrite">
          <span>저자: {author}</span>
          <span>옮긴이: {translator}</span>
          <span>발행자: {publisher}</span>
          <span>발행년도: {publishDate}</span>
        </div>
        <div className="bookData">
          <span>청구기호: {barcode}</span>
          <span id={libraryId}>도서관: {libraryName}</span>
        </div>
      </div>
      <div className="bookStatusBar">
        <span>대출 상태: {lendingStatusValue}</span>
        <span>예약 상태: {lendingReservationValue}</span>
      </div>
    </div>
  );
};

export default CompositeListItem;
