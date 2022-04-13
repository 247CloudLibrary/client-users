import { Link } from "react-router-dom";

// const libraryId = "1";
// const name = "OOO도서관";
// const address = "서울시 금천구 머시기..";
// const email = "email@gmail.com";
// const tel = "02-123-4567";
// const operatingTime = "09:00-18:00";
// const holiday = "화";
// const createdAt = "2022-04-08";
// const updatedAt = "2022-04-09";

const LibrariesListItem = ({
  id,
  name,
  address,
  email,
  tel,
  operatingTime,
  holiday,
}) => {
  const LibrariesListItemArray = [
    { value: id, name: "도서관ID", className: "library-id" },
    { value: address, name: "주소", className: "address" },
    { value: email, name: "email", className: "email" },
    { value: tel, name: "TEL", className: "tel" },
    { value: operatingTime, name: "운영시간", className: "operating-time" },
    { value: holiday, name: "휴관일", className: "holiday" },
    // { value: createdAt, name: "도서관ID" , className:"created-at"},
    // { value: updatedAt, name: "도서관ID" , className:"updated-at"},
  ];

  return (
    <div id="libraries-item">
      <div className="library-name">
        <Link to="/libraries/detail" style={{ textDecoration: "none" }}>
          <div className="name">{name}</div>
        </Link>
      </div>
      <div className="library-listItem">
        {LibrariesListItemArray.map((llia) => (
          <span
            className={llia.className}
            key={llia.value}
          >{`${llia.name}: ${llia.value}`}</span>
        ))}
      </div>
    </div>
  );
};

export default LibrariesListItem;
