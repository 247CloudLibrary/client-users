import axios from "axios";
import HTMLReactParser from "html-react-parser";
import { useEffect, useState } from "react";

const GuideForm = () => {
  const [guideData, setGuideData] = useState([{}]);

  useEffect(() => {
    axios.get("https://www.cloudlibrary.shop/v1/boards").then((guide) => {
      const boardArr = guide.data.data;

      const filtedByLibraryName =
        boardArr.libraryName !== ""
          ? boardArr.filter((i) => i.libraryName === "")
          : boardArr;

      const filtedByGuideData =
        filtedByLibraryName.type !== "안내사항"
          ? filtedByLibraryName.filter((i) => i.type === "안내사항")
          : filtedByLibraryName;
      setGuideData(filtedByGuideData[0]);
    });
  }, []);

  console.log(guideData);
  if (guideData !== undefined) {
    return (
      <div id="guide-form">
        <div className="text-form">
          <div className="title-form">{guideData.title}</div>
          <div className="contents-form">
            {HTMLReactParser(`${guideData.contents}`)}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div id="guide-form">
        <div className="board-guide">이용안내</div>
        <div style={{ fontSize: "1.5rem", marginTop: "3rem" }}>
          등록된 내용이 없습니다.
        </div>
      </div>
    );
  }
};
export default GuideForm;
