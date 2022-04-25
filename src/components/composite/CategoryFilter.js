const CategoryFilter = ({ listItem, onChange }) => {
  return (
    <div>
      <select onChange={onChange}>
        {listItem.map((data) => {
          return <option key={data.category}>{data.category}</option>;
        })}
      </select>
    </div>
  );
};

export default CategoryFilter;
