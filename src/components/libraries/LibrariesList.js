import LibrariesListItem from "./LibrariesListItem";
import axios from "axios";
import LibrariesSearchFilter from "./LibrariesSearchFilter";
import { useEffect, useState } from "react";

const LibrariesList = () => {
  const [listData, setListData] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    axios.get("https://www.cloudlibrary.shop/v1/libraries").then((response) => {
      const responseArr = response.data.data;

      const filtedBySearch = text
        ? responseArr.filter((i) => i.name.includes(text))
        : responseArr;

      setListData(filtedBySearch);
    });
  }, [text]);

  const onSubmit = (e) => {
    setText(e.target.value);
  };

  return (
    <div id="libraries-list">
      <div className="page-title">도서관 찾기</div>
      <LibrariesSearchFilter onSubmit={onSubmit} text={text} />
      {listData &&
        listData.map((data) => (
          <div className="list-box" key={data.id}>
            <LibrariesListItem
              id={data.id}
              name={data.name}
              address={data.address}
              email={data.email}
              tel={data.tel}
              operatingTime={data.operatingTime}
              holiday={data.holiday}
            />
          </div>
        ))}
    </div>
  );
};

export default LibrariesList;
