import { useNavigate } from "react-router-dom";

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

  const lendingStatusValue = () => {
    return lendingStatus === RETURN
      ? (value = "대출 가능")
      : (value = `"대출 불가" + ${lendingDateTime}`);
  };

  const lendingReservationValue = () => {
    return reservationDateTime !== "" ? "예약 상태: 예약 중" : "예약 상태: ";
  };

  const onClick = () => {
    navigate(`/composite-detail/${bookId}`, {
      state: { bookId: id },
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
          <span>{type}</span>
          <span>:{genre}</span>
          <span>:{category}</span>
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
