import client from "./client";

//도서관 찾기
export const listLibraries = () => client.get("/libraries");
