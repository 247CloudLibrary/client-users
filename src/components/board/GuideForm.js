import HTMLReactParser from "html-react-parser";

const title = "이용안내 게시글 제목";
const contents = "<i>이용안내 게시글 내용</i>";

const GuideForm = () => {
  return (
    <div id="guide-form">
      <div className="board-guide">이용안내</div>
      <div className="text-form">
        <div className="title-form">{title}</div>
        <div className="contents-form">{HTMLReactParser(contents)}</div>
      </div>
    </div>
  );
};
export default GuideForm;
