import LibrariesListItem from "./LibrariesListItem";
import axios from "axios";
import { useEffect, useState } from "react";

const LibrariesList = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.cloudlibrary.shop/v1/libraries")
      .then((response) => setListData(response.data));
  }, [setListData]);

  return (
    <div id="libraries-list">
      <div className="page-title">도서관 찾기</div>
      {listData.data &&
        listData.data.map((data) => (
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
