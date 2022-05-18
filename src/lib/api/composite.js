import client from "./client";
import qs from "qs";

export const readCompositeSearchList = ({
  keyword,
  libraryArr,
  publisher,
  author,
  category,
}) => {
  const queryString = qs.stringify({
    keyword,
    libraryArr,
    publisher,
    author,
    category,
  });
  return client.get(`/composite/search?${queryString}`);
};

export const readCompositeSearchDetail = () => {
  client.get(`/composite/${bookId}`);
};
