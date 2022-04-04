import qs from "qs";
import client from "./client";

//게시판 목록 조회
export const listBoards = ({ title, adminName, createAt, readCounts }) => {
  const queryString = qs.stringify({ title, adminName, createAt, readCounts });
  return client.get(`/boards?${queryString}`);
};

//게시글 상세 조회
export const readBoard = (boardId) => client.get(`/boards/${boardId}`);
