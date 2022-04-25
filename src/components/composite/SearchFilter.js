const SearchFilter = ({ text, onChange }) => {
  return (
    <div>
      <form>
        <input
          type="search"
          placeholder="회원 조회"
          value={text}
          onChange={onChange}
        />
        <button>검 색</button>
      </form>
    </div>
  );
};

export default SearchFilter;
