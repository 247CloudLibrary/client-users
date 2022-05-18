import axios from "axios";
import { useNavigate } from "react-router-dom";

const ReservationListItem = ({
  uid,
  libraryName,
  title,
  reservationDateTime,
  orderNum,
  thumbNailImage,
}) => {
  const navigate = useNavigate();

  const onClick = (e) => {
    e.preventDefault();
    if (window.confirm("예약을 해제하시겠습니까?") === false) {
      return;
    } else {
      axios
        .delete(
          `https://www.cloudlibrary.shop/v1/lending/reservation?orderNum=${orderNum}`
        )
        .then((response) => {
          console.log(response);
        });
      alert("예약이 해제되었습니다");
      navigate(`/reservation`);
    }
  };

  return (
    <div className="reservation-items">
      <div className="image-area">
        <img src={thumbNailImage} alt={title} className="thumbNailImage" />
      </div>
      <div className="reservationData">
        <span className="title"> {title}</span>
        <span className="libraryName"> {libraryName}</span>
        <span className="reservationDateTime">{reservationDateTime}</span>
      </div>
      <div className="btn">
        <button className="button" type="submit" onClick={onClick}>
          예약 해제
        </button>
      </div>
    </div>
  );
};

export default ReservationListItem;
