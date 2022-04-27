import HTMLReactParser from "html-react-parser";

const BoardInfo = ({ infoData }) => {
  console.log(infoData);
  return (
    <div id="board-info">
      <div className="info-form">
        <div className="text-form">
          <div className="title-form">{infoData.title}</div>
          <div className="contents-form">
            {HTMLReactParser(`${infoData.contents}`)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardInfo;
