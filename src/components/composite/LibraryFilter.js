const LibraryFilter = ({ listItem, handleChange }) => {
  return (
    <div>
      <select onChange={handleChange}>
        {listItem.map((data) => {
          return <option key={data.libraryId}>{data.libraryName}</option>;
        })}
      </select>
    </div>
  );
};

export default LibraryFilter;
