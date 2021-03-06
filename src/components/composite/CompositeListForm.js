import axios from "axios";
import { useState, useEffect } from "react";
import CompositeListItem from "./CompositeListItem";

const CompositeListForm = ({ categoryValue, libraryValue, text }) => {
  const [listItem, setListItem] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.cloudlibrary.shop/v1/composite/search")
      .then((result) => {
        const resultArray = result.data.data;

        const filtedByCategory = categoryValue
          ? resultArray.filter((i) => i.category === categoryValue)
          : resultArray;
        const filtedByLibrary = libraryValue
          ? filtedByCategory.filter((i) => i.libraryId === libraryValue)
          : filtedByCategory;
        const filtedByText = text
          ? filtedByLibrary.filter((i) => i.title.includes(text))
          : filtedByLibrary;

        setListItem(filtedByText);
      });
  }, [categoryValue, libraryValue, text]);

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
            orderNum={data.orderNum}
            genre={data.genre}
            bookType={data.bookType}
            category={data.category}
            returnDateTime={data.returnDateTime}
          />
        ))}
    </div>
  );
};

export default CompositeListForm;
