import client from "./client";
import qs from "qs";

// composite 도서 검색 목록
export const compositeSearchList = ({keyword, libraryArr, publisher, author, category}) => {
    const queryString = qs.stringify({
    keyword,
    libraryArr,
    publisher,
    author,
    category,
    });
    return client.get(`/composite/search?${queryString}`);
};

// 도서 상세 페이지
export const compositeSearchDetail = () => {
    client.get(`/composite/${bookId}`);
};