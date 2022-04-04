import qs from "qs";
import client from "./client";

//게시판 목록 조회
export const listBoards = ({
  type,
  boardId,
  title,
  adminName,
  createdAt,
  updatedAt,
  readCounts,
}) => {
  const queryString = qs.stringify({
    type,
    boardId,
    title,
    adminName,
    createdAt,
    updatedAt,
    readCounts,
  });
  return client.get(`/boards?${queryString}`);
};

//게시글 상세 조회
export const readBoard = (boardId) => client.get(`/boards/${boardId}`);
