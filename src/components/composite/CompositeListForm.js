import axios from "axios";
import { useState, useEffect } from "react";
import CompositeListItem from "./CompositeListItem";

const CompositeListForm = ({ categoryValue, libraryValue }) => {
  const [listItem, setListItem] = useState([]);
  useEffect(() => {
    axios
      .get(
        "http://ecs-alb-167470959.us-east-1.elb.amazonaws.com/v1/composite/search"
      )
      .then((result) => {
        const resultArray = result.data.data;
        console.log(resultArray);

        const filtedByCategory = categoryValue
          ? resultArray.filter((i) => i.category === categoryValue)
          : resultArray;
        const filtedByLibrary = libraryValue
          ? filtedByCategory.filter((i) => i.libraryId === libraryValue)
          : filtedByCategory;
        setListItem(filtedByLibrary);
      });
  }, [categoryValue, libraryValue]);

  return (
    <div className="composite-list">
      {listItem &&
        listItem.map((data) => (
          <CompositeListItem
            key={data.bookId}
            thumbnailImage={data.thumbNailImage}
            bookId={data.bookId}
            title={data.title}
            libraryid={data.libraryId}
            libraryName={data.libraryName}
            barcode={data.barcode}
            author={data.author}
            translator={data.translator}
            publisher={data.publisher}
            publishDate={data.publishDate}
            lendingStatus={data.lendingStatus}
            lendingDateTime={data.lendingDateTime}
            ReservationDateTime={data.reservationDateTime}
            genre={data.genre}
            type={data.type}
            category={data.category}
          />
        ))}
      ;
    </div>
  );
};

export default CompositeListForm;
