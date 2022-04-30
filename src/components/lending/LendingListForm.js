import axios from "axios";
import { useEffect, useState } from "react";
import LendingListItem from "./LendingListItem";

const mergeArrayObjects = (arr1, arr2) => {
  let merge = [];
  for (let i = 0; i < arr1.length; i++) {
    merge.push({
      ...arr1[i],
      ...arr2.find((d) => d.id === arr1[i].bookId),
    });
  }
  return merge;
};

const LendingListForm = () => {
  const [listItem, setListItem] = useState([]);
  const json = JSON.parse(localStorage.getItem("user"));
  const uid = json.data.uid;

  useEffect(() => {
    axios
      .all([
        axios.get(
          `https://www.cloudlibrary.shop/v1/view/auth-lending?uid=${uid}`
        ),
        axios.get("https://www.cloudlibrary.shop/v1/books"),
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
    <div className="lending-list">
      {listItem &&
        listItem.map((data, index) => (
          <LendingListItem
            key={index}
            uid={data.uid}
            thumbNailImage={data.thumbNailImage}
            bookId={data.bookId}
            title={data.title}
            libraryId={data.libraryId}
            libraryName={data.libraryName}
            lendingId={data.lendingId}
            barcode={data.barcode}
            lendingStatus={data.lendingStatus}
            lendingDateTime={data.lendingDateTime}
            returnDateTime={data.returnDateTime}
          />
        ))}
    </div>
  );
};

export default LendingListForm;
