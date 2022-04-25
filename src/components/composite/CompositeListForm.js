import axios from "axios";
import { useEffect, useState } from "react";
import CompositeListItem from "./CompositeListItem";

const CompositeListForm = () => {
  const [listItem, setListItem] = useState([]);

  useEffect(() => {
    axios
      .get("http://ecs-alb-167470959.us-east-1.elb.amazonaws.com/v1/books")
      .then((result) => {
        setListItem(result.data.data);
      });
  }, [setListItem]);

  return (
    <div className="composite-list">
      {listItem &&
        listItem.map((data) => (
          <CompositeListItem
            key={data.id}
            thumbnailImage={data.thumbNailImage}
            bookId={data.id}
            title={data.title}
            libraryid={data.libraryId}
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
