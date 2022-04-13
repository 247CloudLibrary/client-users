import LibrariesListItem from "./LibrariesListItem";
import axios from "axios";
import { useEffect, useState } from "react";

const LibrariesList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://ecs-alb-167470959.us-east-1.elb.amazonaws.com/v1/libraries")
      .then((response) => setData(response.data));
  });

  return (
    <div id="libraries-list">
      <div className="page-title">도서관 찾기</div>
      {data.map(({ id, name, address, email, tel, operatingTime, holiday }) => (
        <div className="list-box">
          <LibrariesListItem
            id={id}
            name={name}
            address={address}
            email={email}
            tel={tel}
            operatingTime={operatingTime}
            holiday={holiday}
            key={id}
          />
        </div>
      ))}
    </div>
  );
};

export default LibrariesList;
