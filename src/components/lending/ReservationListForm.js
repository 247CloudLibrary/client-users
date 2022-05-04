import axios from "axios";
import { useEffect, useState } from "react";
import ReservationListItem from "./ReservationListItem";
import Header from "../../components/common/Header";
import Footer from "../../pages/home/Footer";

const ReservationlistForm = ({}) => {
  const [listItem, setListItem] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.cloudlibrary.shop/v1/composite/search")
      .then((result) => {
        console.log(result.data.data);
        setListItem(result.data.data);
      });
  }, []);

  return (
    <>
      <div className="reservation-list">
        <Header />
        <div className="reservation-title">Reservation</div>
        <div className="reservationItem">
          {listItem &&
            listItem.map((data) => (
              <ReservationListItem
                key={data.uid}
                libraryName={data.libraryName}
                title={data.title}
                reservationDateTime={data.reservationDateTime}
                orderNum={data.orderNum}
              />
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ReservationlistForm;
