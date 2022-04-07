import client from "./client";

//게시판 목록 조회
export const listInfoBoard = () => client.get("/boards");

//게시글 상세 조회
export const readInfoBoard = () => client.get(`/boards/${Id}`);
