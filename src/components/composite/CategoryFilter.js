const CategoryFilter = ({ CATEGORY_DATA, onChange }) => {
  return (
    <div className="categoryFilter">
      <select onChange={onChange}>
        {CATEGORY_DATA.map((data) => {
          return <option key={data.id}>{data.value}</option>;
        })}
      </select>
    </div>
  );
};

export default CategoryFilter;
