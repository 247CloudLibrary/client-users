const LibraryFilter = ({ listItem, onChange }) => {
  return (
    <div>
      <select onChange={onChange}>
        {listItem.map((data) => {
          return <option key={data.libraryId}>{data.libraryName}</option>;
        })}
      </select>
    </div>
  );
};

export default LibraryFilter;
