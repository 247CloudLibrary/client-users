import client from "./client";

export const readInfoBoardList = () => client.get("/boards");

export const readInfoBoard = () => client.get(`/boards/${Id}`);
