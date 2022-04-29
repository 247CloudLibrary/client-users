import { BiSearch } from "react-icons/bi";

const SearchFilter = ({ text, onChange }) => {
  return (
    <div className="main">
      <form className="home__search-bar">
        <input
          name="search-home"
          type="search"
          onChange={onChange}
          autoComplete="off"
          placeholder="도서 검색"
          value={text}
        />
        <label htmlFor="search-home" className="label-name">
          <span className="content-name">Book Title</span>
        </label>
        <BiSearch className="icon" />
      </form>
    </div>
  );
};

export default SearchFilter;
