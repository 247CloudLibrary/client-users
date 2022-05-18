import client from "./client";

export const readNoticeBoardList = () => client.get("/boards");
