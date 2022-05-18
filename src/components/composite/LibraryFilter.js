const LibraryFilter = ({ libraryData, onChange }) => {
  return (
    <div className="libraryFilter">
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
