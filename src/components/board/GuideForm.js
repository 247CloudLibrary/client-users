import axios from "axios";
import HTMLReactParser from "html-react-parser";
import { useEffect, useState } from "react";

const title = "이용안내 게시글 제목";
const contents = "<i>이용안내 게시글 내용</i>";

const GuideForm = () => {
  const [guideData, setGuideData] = useState();

  useEffect(() => {
    axios
      .get("http://ecs-alb-167470959.us-east-1.elb.amazonaws.com/v1/boards")
      .then(function (guide) {
        setGuideData(guide.data.data);
      });
  }, []);

  return (
    <div id="guide-form">
      <div className="board-guide">이용안내</div>
      <div className="text-form">
        <div className="title-form">{guideData.title}</div>
        <div className="contents-form">
          {HTMLReactParser(guideData.contents)}
        </div>
      </div>
    </div>
  );
};
export default GuideForm;
