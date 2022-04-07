import client from "./client";

//게시판 목록 조회
export const listNoticeBoards = () => client.get("/boards");
