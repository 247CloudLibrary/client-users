import client from "./client";

//게시글 상세 조회
export const readMapBoard = () => client.get("/boards");
