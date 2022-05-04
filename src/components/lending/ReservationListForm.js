import axios from "axios";
import { useEffect, useState } from "react";
import ReservationListItem from "./ReservationListItem";
import Header from "../../components/common/Header";
import Footer from "../../pages/home/Footer";

const mergeArrayObjects = (arr1, arr2) => {
  let merge = [];
  for (let i = 0; i < arr1.length; i++) {
    merge.push({
      ...arr1[i],
      ...arr2.find((d) => d.bookId === arr1[i].bookId),
    });
  }
  return merge;
};
const ReservationlistForm = ({}) => {
  const [listItem, setListItem] = useState([]);
  const json = JSON.parse(localStorage.getItem("user"));
  const uid = json.data.uid;
  const token = json.headers.token;
  const headers = { Authorization: `Bearer ${token}` };

  useEffect(() => {
    axios
      .all([
        axios.get(`/v1/lending/reservation?uid=${uid}`, {
          headers: headers,
        }),
        axios.get("/v1/composite/search", {
          headers: headers,
        }),
      ])
      .then((result) => {
        const resultArray = mergeArrayObjects(
          result[0].data.data,
          result[1].data.data
        );
        setListItem(resultArray);
      });
  }, []);

  console.log(listItem);
  return (
    <>
      <div className="reservation-list">
        <Header />
        <div className="reservation-title">Reservation</div>
        <div className="reservationItem">
          {listItem &&
            listItem.map((data, index) => (
              <ReservationListItem
                key={index}
                uid={data.uid}
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
