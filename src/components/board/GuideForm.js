import axios from "axios";
import HTMLReactParser from "html-react-parser";
import { useEffect, useState } from "react";

const GuideForm = () => {
  const [guideData, setGuideData] = useState([]);

  const guide = guideData[0] ? guideData[0] : undefined;

  const json = JSON.parse(localStorage.getItem("user"));
  const token = json.headers.token;

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  useEffect(() => {
    axios.get("/v1/boards", { headers: headers }).then((guide) => {
      const boardArr = guide.data.data;

      const filtedByLibraryName =
        boardArr.libraryName !== ""
          ? boardArr.filter((i) => i.libraryName === "")
          : boardArr;

      const filtedByGuideData =
        filtedByLibraryName.type !== "안내사항"
          ? filtedByLibraryName.filter((i) => i.type === "안내사항")
          : filtedByLibraryName;
      setGuideData(filtedByGuideData);
    });
  }, []);

  console.log(guideData);
  if (guide !== undefined) {
    return (
      <div id="guide-form">
        <div className="board-guide">이용안내</div>
        <div className="text-form">
          <div className="title-form">{guide.title}</div>
          <div className="contents-form">
            {HTMLReactParser(`${guide.contents}`)}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div id="guide-form">
        <div className="board-guide">이용안내</div>
        <div style={{ fontSize: "1.5rem", marginTop: "5rem" }}>
          등록된 내용이 없습니다.
        </div>
      </div>
    );
  }
};
export default GuideForm;
