import BoardSidebar from "./BoardSideBar";
import BoardDetailForm from "./BoardDetailForm";
import { useState } from "react";

const BoardDetail = () => {
  return (
    <div id="BoardDetail">
      <div className="form-box">
        <div className="contents-box">
          <BoardDetailForm />
        </div>
      </div>
    </div>
  );
};

export default BoardDetail;
