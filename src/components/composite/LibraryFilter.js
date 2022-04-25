const LibraryFilter = ({ libraryData, onChange }) => {
  return (
    <div>
      <select onChange={onChange}>
        {libraryData &&
          libraryData.map((data) => {
            return <option key={data.id}>{data.name}</option>;
          })}
      </select>
    </div>
  );
};

export default LibraryFilter;
