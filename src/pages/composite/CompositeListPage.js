import { useState, useEffect } from "react";
import axios from "axios";
import CompositeListForm from "../../components/composite/CompositeListForm";
import LibraryFilter from "../../components/composite/LibraryFilter";

const CompositeListPage = () => {
  const [listItem, setListItem] = useState([]);
  const [libraryValue, setLibraryValue] = useState("");

  useEffect(() => {
    axios
      .get("http://ecs-alb-167470959.us-east-1.elb.amazonaws.com/v1/books")
      .then((result) => {
        setListItem(result.data.data);
      });
  }, [setListItem]);

  const handleChange = (e) => {
    const { value } = e.target;
    setLibraryValue(
      listItem.filter((d) => d.bookId === value.bookId)[0].libraryName
    );
  };

  return (
    <div>
      <LibraryFilter onChange={handleChange} listItem={listItem} />
      <CompositeListForm listItem={listItem} libraryValue={libraryValue} />
    </div>
  );
};

export default CompositeListPage;
