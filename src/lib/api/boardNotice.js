import qs from "qs";
import client from "./client";

//게시판 목록 조회
export const listNoticeBoards = ({
  boardId,
  title,
  adminName,
  createdAt,
  updatedAt,
  readCounts,
}) => {
  const queryString = qs.stringify({
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
export const readNoticeBoard = (boardId) => client.get(`/boards/${boardId}`);
