import HTMLReactParser from "html-react-parser";

const BoardInfo = ({ id, title, contents, type }) => {
  const infoArray = [{ key: id, title: title, contents: contents }];

  return (
    <div id="board-info">
      {infoArray &&
        infoArray.map((ia) => (
          <div className="info-form" key={ia.key}>
            <div className="text-form">
              <div className="title-form">{ia.title}</div>
              <div className="contents-form">
                {HTMLReactParser(`${ia.contents}`)}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
export default BoardInfo;
