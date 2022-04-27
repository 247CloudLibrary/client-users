const SearchFilter = ({ text, onChange }) => {
  return (
    <div className="searchFilter">
      <input
        type="search"
        placeholder="도서 검색"
        value={text}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchFilter;
