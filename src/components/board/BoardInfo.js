import HTMLReactParser from "html-react-parser";

const BoardInfo = (infoDatas) => {
  // infoData = { infoData: { title: "test", contents: "content" } };

  const infoData = infoDatas.infoData ? infoDatas.infoData : undefined;

  if (infoData !== undefined) {
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
  } else {
    return <div id="board-info">등록된 내용이 없습니다.</div>;
  }
};
export default BoardInfo;
