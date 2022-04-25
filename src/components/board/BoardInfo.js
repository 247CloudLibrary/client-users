import HTMLReactParser from "html-react-parser";

const BoardInfo = ({ title, contents }) => {
  return (
    <div id="board-info">
      <div className="info-form">
        <div className="text-form">
          <div className="title-form">{title}</div>
          <div className="contents-form">{HTMLReactParser(`${contents}`)}</div>
        </div>
      </div>
    </div>
  );
};

export default BoardInfo;
