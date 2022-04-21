import { useNavigate } from "react-router-dom";

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
    { value: address, name: "주소", className: "address" },
    { value: email, name: "email", className: "email" },
    { value: tel, name: "TEL", className: "tel" },
    { value: operatingTime, name: "운영시간", className: "operating-time" },
    { value: holiday, name: "휴관일", className: "holiday" },
  ];

  const navigate = useNavigate();
  const handleLink = (e) => {
    navigate(`/library/${id}`, {
      state: { id: id, libraryName: name },
    });
  };
  return (
    <div id="libraries-item">
      <div className="library-name">
        <div className="name" onClick={handleLink}>
          {name}
        </div>
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
