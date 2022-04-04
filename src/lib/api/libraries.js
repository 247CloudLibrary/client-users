import qs from "qs";
import client from "./client";

//도서관 찾기
export const listLibraries = ({ libraryId, name, address, email, tel }) => {
  const queryString = qs.stringify({
    libraryId,
    name,
    address,
    email,
    tel,
  });
  return client.get(`/libraries?${queryString}`);
};
