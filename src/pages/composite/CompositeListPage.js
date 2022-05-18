import { useState, useEffect } from "react";
import axios from "axios";
import CompositeListForm from "../../components/composite/CompositeListForm";
import LibraryFilter from "../../components/composite/LibraryFilter";
import SearchFilter from "../../components/composite/SearchFilter";
import CategoryFilter from "../../components/composite/CategoryFilter";
import Footer from "../home/Footer";
import Header from "../../components/common/Header";

const CATEGORY_DATA = [
  { id: "0", value: "총류" },
  { id: "100", value: "철학" },
  { id: "200", value: "종교" },
  { id: "300", value: "사회과학" },
  { id: "400", value: "순수과학" },
  { id: "500", value: "기술과학" },
  { id: "600", value: "예술" },
  { id: "700", value: "언어" },
  { id: "800", value: "문학" },
  { id: "900", value: "역사" },
];

const CompositeListPage = () => {
  const [libraryValue, setLibraryValue] = useState("");
  const [libraryData, setLibraryData] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    axios.get("https://www.cloudlibrary.shop/v1/libraries").then((result) => {
      setLibraryData(result.data.data);
    });
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    setLibraryValue(libraryData.filter((d) => d.name === value)[0].id);
  };

  const onSelect = (e) => {
    const { value } = e.target;
    setCategoryValue(CATEGORY_DATA.filter((d) => d.value === value)[0].value);
  };

  const onChange = (e) => {
    setText(e.target.value);
    console.log(e);
  };

  return (
    <>
      <div className="compositeList">
        <Header />
        <div className="composite-list-title">Book List</div>
        <SearchFilter text={text} onChange={onChange} />
        <div className="compositeDatas">
          <div className="compositeFilterWrap">
            <CategoryFilter onChange={onSelect} CATEGORY_DATA={CATEGORY_DATA} />
            <LibraryFilter onChange={handleChange} libraryData={libraryData} />
          </div>
          <div className="compositeListForm">
            <CompositeListForm
              libraryValue={libraryValue}
              categoryValue={categoryValue}
              text={text}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CompositeListPage;
